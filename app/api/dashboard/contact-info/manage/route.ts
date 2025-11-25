import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { authenticate, requireAuth } from "@/middleware/auth";

// GET - Get all contact info records (for admin management)
export async function GET(request: NextRequest) {
  try {
    const user = await authenticate(request);
    requireAuth(user);

    const contactInfos = await prisma.contactInfo.findMany({
      orderBy: { createdAt: 'desc' }
    });

    return NextResponse.json(contactInfos);
  } catch (error: any) {
    console.error("Error fetching all contact info:", error);

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

// DELETE - Clear all contact info (admin only)
export async function DELETE(request: NextRequest) {
  try {
    const user = await authenticate(request);
    requireAuth(user);

    const result = await prisma.contactInfo.deleteMany({});

    return NextResponse.json(
      { 
        message: `${result.count} contact info records deleted successfully`,
        count: result.count 
      }
    );
  } catch (error: any) {
    console.error("Error clearing contact info:", error);

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