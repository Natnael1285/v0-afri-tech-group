import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { authenticate, requireAuth } from "@/middleware/auth";

const systemSchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().min(1, "Description is required"),
});

interface RouteParams {
  params: {
    id: string;
  };
}

// GET - Get a single system
export async function GET(request: NextRequest, { params }: RouteParams) {
  try {
    const { id } = params;

    const system = await prisma.system.findUnique({
      where: { id },
    });

    if (!system) {
      return NextResponse.json(
        { message: "System not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(system);
  } catch (error) {
    console.error("Error fetching system:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

// PUT - Update entire system
export async function PUT(request: NextRequest, { params }: RouteParams) {
  try {
    const user = await authenticate(request);
    requireAuth(user);

    const { id } = params;
    const body = await request.json();
    const validatedData = systemSchema.parse(body);

    const system = await prisma.system.update({
      where: { id },
      data: validatedData,
    });

    return NextResponse.json(
      { message: "System updated successfully", data: system }
    );
  } catch (error: any) {
    console.error("Error updating system:", error);

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
        { message: "System not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

// DELETE - Delete system
export async function DELETE(request: NextRequest, { params }: RouteParams) {
  try {
    const user = await authenticate(request);
    requireAuth(user);

    const { id } = params;

    await prisma.system.delete({
      where: { id },
    });

    return NextResponse.json(
      { message: "System deleted successfully" }
    );
  } catch (error: any) {
    console.error("Error deleting system:", error);

    if (error.message === 'Unauthorized') {
      return NextResponse.json(
        { message: "Unauthorized" },
        { status: 401 }
      );
    }

    if (error.code === 'P2025') {
      return NextResponse.json(
        { message: "System not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

