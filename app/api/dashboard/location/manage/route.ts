import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { authenticate, requireAuth } from "@/middleware/auth";

// GET - Get all location info records (for admin management)
export async function GET(request: NextRequest) {
  try {
    const user = await authenticate(request);
    requireAuth(user);

    const locationInfos = await prisma.locationInfo.findMany({
      orderBy: { createdAt: 'desc' }
    });

    return NextResponse.json(locationInfos);
  } catch (error: any) {
    console.error("Error fetching all location info:", error);

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

// DELETE - Clear all location info (admin only)
export async function DELETE(request: NextRequest) {
  try {
    const user = await authenticate(request);
    requireAuth(user);

    const result = await prisma.locationInfo.deleteMany({});

    return NextResponse.json(
      { 
        message: `${result.count} location info records deleted successfully`,
        count: result.count 
      }
    );
  } catch (error: any) {
    console.error("Error clearing location info:", error);

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