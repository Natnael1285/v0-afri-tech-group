import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { authenticate, requireAuth } from "@/middleware/auth";

const contactInfoSchema = z.object({
  address: z.string().min(1, "Address is required"),
  phone: z.string().min(1, "Phone number is required"),
  email: z.string().email("Valid email is required"),
});

// GET - Get contact info (only one record expected)
export async function GET() {
  try {
    const contactInfo = await prisma.contactInfo.findFirst();

    return NextResponse.json(contactInfo || null);
  } catch (error) {
    console.error("Error fetching contact info:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

// POST - Create contact info (only one should exist)
export async function POST(request: NextRequest) {
  try {
    const user = await authenticate(request);
    requireAuth(user);

    const body = await request.json();
    const validatedData = contactInfoSchema.parse(body);

    // Check if contact info already exists
    const existingContactInfo = await prisma.contactInfo.findFirst();
    
    if (existingContactInfo) {
      return NextResponse.json(
        { message: "Contact info already exists. Use PUT to update." },
        { status: 400 }
      );
    }

    const contactInfo = await prisma.contactInfo.create({
      data: validatedData,
    });

    return NextResponse.json(
      { message: "Contact info created successfully", data: contactInfo },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Error creating contact info:", error);

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

// PUT - Update contact info (update the single record)
export async function PUT(request: NextRequest) {
  try {
    const user = await authenticate(request);
    requireAuth(user);

    const body = await request.json();
    const validatedData = contactInfoSchema.parse(body);

    // Get the first contact info (assuming only one exists)
    const existingContactInfo = await prisma.contactInfo.findFirst();
    
    if (!existingContactInfo) {
      return NextResponse.json(
        { message: "Contact info not found. Use POST to create." },
        { status: 404 }
      );
    }

    const contactInfo = await prisma.contactInfo.update({
      where: { id: existingContactInfo.id },
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

    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}