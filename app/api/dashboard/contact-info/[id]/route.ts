import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { authenticate, requireAuth } from "@/middleware/auth";

const contactInfoSchema = z.object({
  address: z.string().min(1, "Address is required").optional(),
  phone: z.string().min(1, "Phone number is required").optional(),
  email: z.string().email("Valid email is required").optional(),
});

interface RouteParams {
  params: {
    id: string;
  };
}

// GET - Get specific contact info by ID
export async function GET(request: NextRequest, { params }: RouteParams) {
  try {
    const { id } = params;

    const contactInfo = await prisma.contactInfo.findUnique({
      where: { id },
    });

    if (!contactInfo) {
      return NextResponse.json(
        { message: "Contact info not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(contactInfo);
  } catch (error) {
    console.error("Error fetching contact info:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

// PATCH - Partially update contact info
export async function PATCH(request: NextRequest, { params }: RouteParams) {
  try {
    const user = await authenticate(request);
    requireAuth(user);

    const { id } = params;
    const body = await request.json();
    const validatedData = contactInfoSchema.partial().parse(body);

    // Check if contact info exists
    const existingContactInfo = await prisma.contactInfo.findUnique({
      where: { id },
    });

    if (!existingContactInfo) {
      return NextResponse.json(
        { message: "Contact info not found" },
        { status: 404 }
      );
    }

    const contactInfo = await prisma.contactInfo.update({
      where: { id },
      data: validatedData,
    });

    return NextResponse.json(
      { message: "Contact info updated successfully", data: contactInfo }
    );
  } catch (error: any) {
    console.error("Error updating contact info:", error);

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
        { message: "Contact info not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

// DELETE - Delete contact info
export async function DELETE(request: NextRequest, { params }: RouteParams) {
  try {
    const user = await authenticate(request);
    requireAuth(user);

    const { id } = params;

    // Check if contact info exists
    const existingContactInfo = await prisma.contactInfo.findUnique({
      where: { id },
    });

    if (!existingContactInfo) {
      return NextResponse.json(
        { message: "Contact info not found" },
        { status: 404 }
      );
    }

    await prisma.contactInfo.delete({
      where: { id },
    });

    return NextResponse.json(
      { message: "Contact info deleted successfully" }
    );
  } catch (error: any) {
    console.error("Error deleting contact info:", error);

    if (error.message === 'Unauthorized') {
      return NextResponse.json(
        { message: "Unauthorized" },
        { status: 401 }
      );
    }

    if (error.code === 'P2025') {
      return NextResponse.json(
        { message: "Contact info not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}