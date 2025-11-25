import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { authenticate, requireAuth } from "@/middleware/auth";

const locationInfoSchema = z.object({
  mapLink: z.string().url("Map link must be a valid URL").min(1, "Map link is required"),
});

interface RouteParams {
  params: {
    id: string;
  };
}

// GET - Get specific location info by ID
export async function GET(request: NextRequest, { params }: RouteParams) {
  try {
    const { id } = params;

    const locationInfo = await prisma.locationInfo.findUnique({
      where: { id },
    });

    if (!locationInfo) {
      return NextResponse.json(
        { message: "Location info not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(locationInfo);
  } catch (error) {
    console.error("Error fetching location info:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

// PATCH - Partially update location info
export async function PATCH(request: NextRequest, { params }: RouteParams) {
  try {
    const user = await authenticate(request);
    requireAuth(user);

    const { id } = params;
    const body = await request.json();
    const validatedData = locationInfoSchema.partial().parse(body);

    // Check if location info exists
    const existingLocation = await prisma.locationInfo.findUnique({
      where: { id },
    });

    if (!existingLocation) {
      return NextResponse.json(
        { message: "Location info not found" },
        { status: 404 }
      );
    }

    const locationInfo = await prisma.locationInfo.update({
      where: { id },
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

    if (error.code === 'P2025') {
      return NextResponse.json(
        { message: "Location info not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

// DELETE - Delete location info
export async function DELETE(request: NextRequest, { params }: RouteParams) {
  try {
    const user = await authenticate(request);
    requireAuth(user);

    const { id } = params;

    // Check if location info exists
    const existingLocation = await prisma.locationInfo.findUnique({
      where: { id },
    });

    if (!existingLocation) {
      return NextResponse.json(
        { message: "Location info not found" },
        { status: 404 }
      );
    }

    await prisma.locationInfo.delete({
      where: { id },
    });

    return NextResponse.json(
      { message: "Location info deleted successfully" }
    );
  } catch (error: any) {
    console.error("Error deleting location info:", error);

    if (error.message === 'Unauthorized') {
      return NextResponse.json(
        { message: "Unauthorized" },
        { status: 401 }
      );
    }

    if (error.code === 'P2025') {
      return NextResponse.json(
        { message: "Location info not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}