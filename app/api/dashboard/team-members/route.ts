import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { authenticate, requireAuth } from "@/middleware/auth";

const teamMemberSchema = z.object({
  name: z.string().min(1, "Name is required").max(100, "Name should not exceed 100 characters"),
  position: z.string().min(1, "Position is required").max(100, "Position should not exceed 100 characters"),
  description: z.string().min(10, "Description should be at least 10 characters long").max(500, "Description should not exceed 500 characters"),
  photo: z.union([
    z.string().url("Photo must be a valid URL"),
    z.string().length(0),
    z.null(),
  ]).optional().nullable(),
});

// GET - Get all team members with optional filtering and sorting
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const position = searchParams.get('position');
    const sortBy = searchParams.get('sortBy') || 'createdAt';
    const sortOrder = searchParams.get('sortOrder') || 'desc';
    const limit = searchParams.get('limit');

    // Build where clause for filtering
    const where = position ? {
      position: {
        contains: position,
        mode: 'insensitive' as const
      }
    } : {};

    const teamMembers = await prisma.teamMember.findMany({
      where,
      orderBy: {
        [sortBy]: sortOrder
      },
      take: limit ? parseInt(limit) : undefined,
      select: {
        id: true,
        name: true,
        position: true,
        description: true,
        photo: true,
        createdAt: true,
        updatedAt: true,
      }
    });

    return NextResponse.json(teamMembers);
  } catch (error) {
    console.error("Error fetching team members:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

// POST - Create a new team member (admin only)
export async function POST(request: NextRequest) {
  try {
    const user = await authenticate(request);
    requireAuth(user);

    const body = await request.json();
    const validatedData = teamMemberSchema.parse(body);

    // Normalize empty string photo to null
    const normalizedData = {
      ...validatedData,
      photo: validatedData.photo === "" ? null : validatedData.photo,
    };

    const teamMember = await prisma.teamMember.create({
      data: normalizedData,
    });

    return NextResponse.json(
      { message: "Team member created successfully", data: teamMember },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Error creating team member:", error);

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