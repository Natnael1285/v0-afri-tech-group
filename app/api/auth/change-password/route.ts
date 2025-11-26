import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { authenticate, requireAuth } from "@/middleware/auth";

const changePasswordSchema = z.object({
  currentPassword: z.string().min(1, "Current password is required"),
  newPassword: z.string().min(6, "New password must be at least 6 characters long"),
});

const changeUsernameSchema = z.object({
  newUsername: z.string().min(1, "Username is required").max(50, "Username should not exceed 50 characters"),
  password: z.string().min(1, "Password is required to confirm username change"),
});

// POST - Change password
export async function POST(request: NextRequest) {
  try {
    const user = await authenticate(request);
    requireAuth(user);

    const body = await request.json();
    const validatedData = changePasswordSchema.parse(body);

    // Get the current user from database
    const currentUser = await prisma.user.findUnique({
      where: { id: user.userId },
    });

    if (!currentUser) {
      return NextResponse.json(
        { message: "User not found" },
        { status: 404 }
      );
    }

    // Verify current password
    const isCurrentPasswordValid = await bcrypt.compare(
      validatedData.currentPassword,
      currentUser.password
    );

    if (!isCurrentPasswordValid) {
      return NextResponse.json(
        { message: "Current password is incorrect" },
        { status: 401 }
      );
    }

    // Hash new password
    const hashedNewPassword = await bcrypt.hash(validatedData.newPassword, 10);

    // Update password
    await prisma.user.update({
      where: { id: user.userId },
      data: {
        password: hashedNewPassword,
      },
    });

    return NextResponse.json({
      message: "Password changed successfully",
    });
  } catch (error: any) {
    console.error("Error changing password:", error);

    if (error.message === 'Unauthorized') {
      return NextResponse.json(
        { message: "Unauthorized" },
        { status: 401 }
      );
    }

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          message: "Validation failed",
          errors: error.issues.map((e) => ({
            field: e.path.join("."),
            message: e.message,
          })),
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

// PUT - Change username
export async function PUT(request: NextRequest) {
  try {
    const user = await authenticate(request);
    requireAuth(user);

    const body = await request.json();
    const validatedData = changeUsernameSchema.parse(body);

    // Get the current user from database
    const currentUser = await prisma.user.findUnique({
      where: { id: user.userId },
    });

    if (!currentUser) {
      return NextResponse.json(
        { message: "User not found" },
        { status: 404 }
      );
    }

    // Verify password
    const isPasswordValid = await bcrypt.compare(
      validatedData.password,
      currentUser.password
    );

    if (!isPasswordValid) {
      return NextResponse.json(
        { message: "Password is incorrect" },
        { status: 401 }
      );
    }

    // Check if new username already exists
    const existingUser = await prisma.user.findFirst({
      where: { 
        username: validatedData.newUsername,
        NOT: { id: user.userId }
      },
    });

    if (existingUser) {
      return NextResponse.json(
        { message: "Username already exists" },
        { status: 400 }
      );
    }

    // Update username
    const updatedUser = await prisma.user.update({
      where: { id: user.userId },
      data: {
        username: validatedData.newUsername,
      },
    });

    // Generate new token with updated username
    const token = jwt.sign(
      {
        userId: updatedUser.id,
        username: updatedUser.username,
        role: updatedUser.role,
      },
      process.env.JWT_SECRET_KEY!,
      { expiresIn: "30d" }
    );

    const { serialize } = await import("cookie");
    const cookie = serialize("session_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 30 * 24 * 60 * 60,
      path: "/",
      sameSite: "strict",
    });

    return new NextResponse(
      JSON.stringify({
        message: "Username changed successfully",
        data: {
          id: updatedUser.id,
          username: updatedUser.username,
          role: updatedUser.role,
        },
      }),
      {
        status: 200,
        headers: { "Set-Cookie": cookie, "Content-Type": "application/json" },
      }
    );
  } catch (error: any) {
    console.error("Error changing username:", error);

    if (error.message === 'Unauthorized') {
      return NextResponse.json(
        { message: "Unauthorized" },
        { status: 401 }
      );
    }

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          message: "Validation failed",
          errors: error.issues.map((e) => ({
            field: e.path.join("."),
            message: e.message,
          })),
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

