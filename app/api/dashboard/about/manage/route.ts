import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { authenticate, requireAuth } from "@/middleware/auth";

// GET - Get all about page records (admin only)
export async function GET(request: NextRequest) {
  try {
    const user = await authenticate(request);
    requireAuth(user);

    const aboutPages = await prisma.aboutPage.findMany({
      orderBy: { createdAt: 'desc' }
    });

    return NextResponse.json(aboutPages);
  } catch (error: any) {
    console.error("Error fetching all about pages:", error);

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

// DELETE - Clear all about pages (admin only)
export async function DELETE(request: NextRequest) {
  try {
    const user = await authenticate(request);
    requireAuth(user);

    const result = await prisma.aboutPage.deleteMany({});

    return NextResponse.json(
      { 
        message: `${result.count} about page records deleted successfully`,
        count: result.count 
      }
    );
  } catch (error: any) {
    console.error("Error clearing about pages:", error);

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