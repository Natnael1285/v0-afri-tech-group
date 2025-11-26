import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { serialize } from "cookie";

const signinSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const validatedData = signinSchema.parse(body);

    // Find user by username (case-sensitive match)
    const user = await prisma.user.findFirst({
      where: { 
        username: validatedData.username
      },
    });

    if (!user) {
      console.error(`User not found: ${validatedData.username}`);
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    const isPasswordValid = await bcrypt.compare(
      validatedData.password,
      user.password
    );

    if (!isPasswordValid)
      return NextResponse.json(
        { message: "Invalid password" },
        { status: 401 }
      );

    const token = jwt.sign(
      {
        userId: user.id,
        username: user.username,
        role: user.role,
      },
      process.env.JWT_SECRET_KEY!,
      { expiresIn: "30d" }
    );

    const cookie = serialize("session_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 30 * 24 * 60 * 60,
      path: "/",
      sameSite: "strict",
    });

    const { password: _, ...userWithoutPassword } = user;

    return new NextResponse(
      JSON.stringify({
        message: "Sign-in successful",
        data: userWithoutPassword,
        accessToken: token,
      }),
      {
        status: 200,
        headers: { "Set-Cookie": cookie, "Content-Type": "application/json" },
      }
    );
  } catch (error: any) {
    console.error("Error during sign-in:", error);

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
      {
        message: "Internal server error",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
