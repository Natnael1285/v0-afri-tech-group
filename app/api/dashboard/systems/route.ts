import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { authenticate, requireAuth } from "@/middleware/auth";

const systemSchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().min(1, "Description is required"),
});

// GET - Get all systems
export async function GET() {
  try {
    const systems = await prisma.system.findMany({
      orderBy: { createdAt: 'desc' }
    });

    return NextResponse.json(systems);
  } catch (error) {
    console.error("Error fetching systems:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

// POST - Create a new system
export async function POST(request: NextRequest) {
  try {
    const user = await authenticate(request);
    requireAuth(user);

    const body = await request.json();
    const validatedData = systemSchema.parse(body);

    const system = await prisma.system.create({
      data: validatedData,
    });

    return NextResponse.json(
      { message: "System created successfully", data: system },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Error creating system:", error);

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

