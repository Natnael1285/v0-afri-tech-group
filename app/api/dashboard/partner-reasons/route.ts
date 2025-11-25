import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { authenticate, requireAuth } from "@/middleware/auth";

const partnerReasonSchema = z.object({
  icon: z.string().min(1, "Icon is required"),
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
});

// GET - Get all partner reasons
export async function GET() {
  try {
    const partnerReasons = await prisma.partnerReason.findMany({
      orderBy: { createdAt: 'desc' }
    });

    return NextResponse.json(partnerReasons);
  } catch (error) {
    console.error("Error fetching partner reasons:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

// POST - Create a new partner reason
export async function POST(request: NextRequest) {
  try {
    const user = await authenticate(request);
    requireAuth(user);

    const body = await request.json();
    const validatedData = partnerReasonSchema.parse(body);

    const partnerReason = await prisma.partnerReason.create({
      data: validatedData,
    });

    return NextResponse.json(
      { message: "Partner reason created successfully", data: partnerReason },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Error creating partner reason:", error);

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