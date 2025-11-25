// app/api/hero/[id]/route.ts
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { authenticate, requireAuth } from "@/middleware/auth";

const heroSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
});

interface RouteParams {
  params: {
    id: string;
  };
}

// GET - Get specific hero section by ID
export async function GET(request: NextRequest, { params }: RouteParams) {
  try {
    const { id } = params;

    const hero = await prisma.heroSection.findUnique({
      where: { id },
    });

    if (!hero) {
      return NextResponse.json(
        { message: "Hero section not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(hero);
  } catch (error) {
    console.error("Error fetching hero section:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

// PATCH - Update specific hero section
export async function PATCH(request: NextRequest, { params }: RouteParams) {
  try {
    const user = await authenticate(request);
    requireAuth(user);

    const { id } = params;
    const body = await request.json();
    const validatedData = heroSchema.partial().parse(body);

    const hero = await prisma.heroSection.update({
      where: { id },
      data: validatedData,
    });

    return NextResponse.json(
      { message: "Hero section updated successfully", data: hero }
    );
  } catch (error: any) {
    console.error("Error updating hero section:", error);

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

    if (error.code === 'P2025') {
      return NextResponse.json(
        { message: "Hero section not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

// DELETE - Delete hero section
export async function DELETE(request: NextRequest, { params }: RouteParams) {
  try {
    const user = await authenticate(request);
    requireAuth(user);

    const { id } = params;

    await prisma.heroSection.delete({
      where: { id },
    });

    return NextResponse.json(
      { message: "Hero section deleted successfully" }
    );
  } catch (error: any) {
    console.error("Error deleting hero section:", error);

    if (error.message === 'Unauthorized') {
      return NextResponse.json(
        { message: "Unauthorized" },
        { status: 401 }
      );
    }

    if (error.code === 'P2025') {
      return NextResponse.json(
        { message: "Hero section not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}