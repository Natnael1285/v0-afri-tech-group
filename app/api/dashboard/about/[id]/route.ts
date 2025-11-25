import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { authenticate, requireAuth } from "@/middleware/auth";

const aboutPageSchema = z.object({
  mission: z.string().min(1, "Mission is required").max(2000, "Mission should not exceed 2000 characters").optional(),
  vision: z.string().min(1, "Vision is required").max(2000, "Vision should not exceed 2000 characters").optional(),
});

interface RouteParams {
  params: {
    id: string;
  };
}

// GET - Get specific about page by ID (public)
export async function GET(request: NextRequest, { params }: RouteParams) {
  try {
    const { id } = params;

    const aboutPage = await prisma.aboutPage.findUnique({
      where: { id },
    });

    if (!aboutPage) {
      return NextResponse.json(
        { message: "About page not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(aboutPage);
  } catch (error) {
    console.error("Error fetching about page:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

// PATCH - Partially update about page (admin only)
export async function PATCH(request: NextRequest, { params }: RouteParams) {
  try {
    const user = await authenticate(request);
    requireAuth(user);

    const { id } = params;
    const body = await request.json();
    const validatedData = aboutPageSchema.partial().parse(body);

    // Check if about page exists
    const existingAboutPage = await prisma.aboutPage.findUnique({
      where: { id },
    });

    if (!existingAboutPage) {
      return NextResponse.json(
        { message: "About page not found" },
        { status: 404 }
      );
    }

    const aboutPage = await prisma.aboutPage.update({
      where: { id },
      data: validatedData,
    });

    return NextResponse.json(
      { message: "About page updated successfully", data: aboutPage }
    );
  } catch (error: any) {
    console.error("Error updating about page:", error);

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
        { message: "About page not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

// DELETE - Delete about page (admin only)
export async function DELETE(request: NextRequest, { params }: RouteParams) {
  try {
    const user = await authenticate(request);
    requireAuth(user);

    const { id } = params;

    // Check if about page exists
    const existingAboutPage = await prisma.aboutPage.findUnique({
      where: { id },
    });

    if (!existingAboutPage) {
      return NextResponse.json(
        { message: "About page not found" },
        { status: 404 }
      );
    }

    await prisma.aboutPage.delete({
      where: { id },
    });

    return NextResponse.json(
      { message: "About page deleted successfully" }
    );
  } catch (error: any) {
    console.error("Error deleting about page:", error);

    if (error.message === 'Unauthorized') {
      return NextResponse.json(
        { message: "Unauthorized" },
        { status: 401 }
      );
    }

    if (error.code === 'P2025') {
      return NextResponse.json(
        { message: "About page not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}