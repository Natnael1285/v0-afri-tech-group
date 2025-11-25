import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { authenticate, requireAuth } from "@/middleware/auth";

const locationInfoSchema = z.object({
  mapLink: z.string().url("Map link must be a valid URL").min(1, "Map link is required"),
});

// GET - Get location info (only one record expected)
export async function GET() {
  try {
    const locationInfo = await prisma.locationInfo.findFirst();

    return NextResponse.json(locationInfo || null);
  } catch (error) {
    console.error("Error fetching location info:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

// POST - Create location info (only one should exist)
export async function POST(request: NextRequest) {
  try {
    const user = await authenticate(request);
    requireAuth(user);

    const body = await request.json();
    const validatedData = locationInfoSchema.parse(body);

    // Check if location info already exists
    const existingLocation = await prisma.locationInfo.findFirst();
    
    if (existingLocation) {
      return NextResponse.json(
        { message: "Location info already exists. Use PUT to update." },
        { status: 400 }
      );
    }

    const locationInfo = await prisma.locationInfo.create({
      data: validatedData,
    });

    return NextResponse.json(
      { message: "Location info created successfully", data: locationInfo },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Error creating location info:", error);

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

// PUT - Update location info (update the single record)
export async function PUT(request: NextRequest) {
  try {
    const user = await authenticate(request);
    requireAuth(user);

    const body = await request.json();
    const validatedData = locationInfoSchema.parse(body);

    // Get the first location info (assuming only one exists)
    const existingLocation = await prisma.locationInfo.findFirst();
    
    if (!existingLocation) {
      return NextResponse.json(
        { message: "Location info not found. Use POST to create." },
        { status: 404 }
      );
    }

    const locationInfo = await prisma.locationInfo.update({
      where: { id: existingLocation.id },
      data: validatedData,
    });

    return NextResponse.json(
      { message: "Location info updated successfully", data: locationInfo }
    );
  } catch (error: any) {
    console.error("Error updating location info:", error);

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