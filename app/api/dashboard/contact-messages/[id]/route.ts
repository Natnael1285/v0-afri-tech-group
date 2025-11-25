import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { authenticate, requireAuth } from "@/middleware/auth";

const contactMessageUpdateSchema = z.object({
  email: z.string().email("Valid email is required").optional(),
  message: z.string()
    .min(10, "Message should be at least 10 characters long")
    .max(1000, "Message should not exceed 1000 characters")
    .optional(),
});

interface RouteParams {
  params: {
    id: string;
  };
}

// GET - Get specific contact message by ID (admin only)
export async function GET(request: NextRequest, { params }: RouteParams) {
  try {
    const user = await authenticate(request);
    requireAuth(user);

    const { id } = params;

    const contactMessage = await prisma.contactMessage.findUnique({
      where: { id },
    });

    if (!contactMessage) {
      return NextResponse.json(
        { message: "Contact message not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(contactMessage);
  } catch (error: any) {
    console.error("Error fetching contact message:", error);

    if (error.message === 'Unauthorized') {
      return NextResponse.json(
        { message: "Unauthorized" },
        { status: 401 }
      );
    }

    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

// PATCH - Update contact message (admin only)
export async function PATCH(request: NextRequest, { params }: RouteParams) {
  try {
    const user = await authenticate(request);
    requireAuth(user);

    const { id } = params;
    const body = await request.json();
    const validatedData = contactMessageUpdateSchema.partial().parse(body);

    // Check if contact message exists
    const existingMessage = await prisma.contactMessage.findUnique({
      where: { id },
    });

    if (!existingMessage) {
      return NextResponse.json(
        { message: "Contact message not found" },
        { status: 404 }
      );
    }

    const contactMessage = await prisma.contactMessage.update({
      where: { id },
      data: validatedData,
    });

    return NextResponse.json(
      { message: "Contact message updated successfully", data: contactMessage }
    );
  } catch (error: any) {
    console.error("Error updating contact message:", error);

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
        { message: "Contact message not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

// DELETE - Delete contact message (admin only)
export async function DELETE(request: NextRequest, { params }: RouteParams) {
  try {
    const user = await authenticate(request);
    requireAuth(user);

    const { id } = params;

    // Check if contact message exists
    const existingMessage = await prisma.contactMessage.findUnique({
      where: { id },
    });

    if (!existingMessage) {
      return NextResponse.json(
        { message: "Contact message not found" },
        { status: 404 }
      );
    }

    await prisma.contactMessage.delete({
      where: { id },
    });

    return NextResponse.json(
      { message: "Contact message deleted successfully" }
    );
  } catch (error: any) {
    console.error("Error deleting contact message:", error);

    if (error.message === 'Unauthorized') {
      return NextResponse.json(
        { message: "Unauthorized" },
        { status: 401 }
      );
    }

    if (error.code === 'P2025') {
      return NextResponse.json(
        { message: "Contact message not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}