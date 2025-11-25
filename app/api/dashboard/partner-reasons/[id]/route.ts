import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { authenticate, requireAuth } from "@/middleware/auth";

const partnerReasonSchema = z.object({
  icon: z.string().min(1, "Icon is required").optional(),
  title: z.string().min(1, "Title is required").optional(),
  description: z.string().min(1, "Description is required").optional(),
});

interface RouteParams {
  params: {
    id: string;
  };
}

// GET - Get specific partner reason by ID
export async function GET(request: NextRequest, { params }: RouteParams) {
  try {
    const { id } = params;

    const partnerReason = await prisma.partnerReason.findUnique({
      where: { id },
    });

    if (!partnerReason) {
      return NextResponse.json(
        { message: "Partner reason not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(partnerReason);
  } catch (error) {
    console.error("Error fetching partner reason:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

// PUT - Update entire partner reason
export async function PUT(request: NextRequest, { params }: RouteParams) {
  try {
    const user = await authenticate(request);
    requireAuth(user);

    const { id } = params;
    const body = await request.json();
    const validatedData = partnerReasonSchema.parse(body);

    const partnerReason = await prisma.partnerReason.update({
      where: { id },
      data: validatedData,
    });

    return NextResponse.json(
      { message: "Partner reason updated successfully", data: partnerReason }
    );
  } catch (error: any) {
    console.error("Error updating partner reason:", error);

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
        { message: "Partner reason not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

// PATCH - Partially update partner reason
export async function PATCH(request: NextRequest, { params }: RouteParams) {
  try {
    const user = await authenticate(request);
    requireAuth(user);

    const { id } = params;
    const body = await request.json();
    const validatedData = partnerReasonSchema.partial().parse(body);

    // Check if partner reason exists
    const existingPartnerReason = await prisma.partnerReason.findUnique({
      where: { id },
    });

    if (!existingPartnerReason) {
      return NextResponse.json(
        { message: "Partner reason not found" },
        { status: 404 }
      );
    }

    const partnerReason = await prisma.partnerReason.update({
      where: { id },
      data: validatedData,
    });

    return NextResponse.json(
      { message: "Partner reason updated successfully", data: partnerReason }
    );
  } catch (error: any) {
    console.error("Error updating partner reason:", error);

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
        { message: "Partner reason not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

// DELETE - Delete partner reason
export async function DELETE(request: NextRequest, { params }: RouteParams) {
  try {
    const user = await authenticate(request);
    requireAuth(user);

    const { id } = params;

    // Check if partner reason exists
    const existingPartnerReason = await prisma.partnerReason.findUnique({
      where: { id },
    });

    if (!existingPartnerReason) {
      return NextResponse.json(
        { message: "Partner reason not found" },
        { status: 404 }
      );
    }

    await prisma.partnerReason.delete({
      where: { id },
    });

    return NextResponse.json(
      { message: "Partner reason deleted successfully" }
    );
  } catch (error: any) {
    console.error("Error deleting partner reason:", error);

    if (error.message === 'Unauthorized') {
      return NextResponse.json(
        { message: "Unauthorized" },
        { status: 401 }
      );
    }

    if (error.code === 'P2025') {
      return NextResponse.json(
        { message: "Partner reason not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}