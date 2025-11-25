import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { authenticate, requireAuth } from "@/middleware/auth";

const batchTeamMemberSchema = z.object({
  teamMembers: z.array(z.object({
    name: z.string().min(1, "Name is required").max(100, "Name should not exceed 100 characters"),
    position: z.string().min(1, "Position is required").max(100, "Position should not exceed 100 characters"),
    description: z.string().min(10, "Description should be at least 10 characters long").max(500, "Description should not exceed 500 characters"),
    photo: z.string().url("Photo must be a valid URL").optional().or(z.literal("")),
  })).min(1, "At least one team member is required")
});

// POST - Create multiple team members at once (admin only)
export async function POST(request: NextRequest) {
  try {
    const user = await authenticate(request);
    requireAuth(user);

    const body = await request.json();
    const validatedData = batchTeamMemberSchema.parse(body);

    const result = await prisma.teamMember.createMany({
      data: validatedData.teamMembers,
      skipDuplicates: true,
    });

    // Get the created team members to return them
    const createdTeamMembers = await prisma.teamMember.findMany({
      where: {
        name: {
          in: validatedData.teamMembers.map(member => member.name)
        }
      },
      orderBy: { createdAt: 'desc' },
      take: result.count
    });

    return NextResponse.json(
      { 
        message: `${result.count} team members created successfully`,
        count: result.count,
        data: createdTeamMembers
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Error creating batch team members:", error);

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

// DELETE - Delete multiple team members (admin only)
export async function DELETE(request: NextRequest) {
  try {
    const user = await authenticate(request);
    requireAuth(user);

    const body = await request.json();
    const { ids } = z.object({
      ids: z.array(z.string().uuid()).min(1, "At least one ID is required")
    }).parse(body);

    const result = await prisma.teamMember.deleteMany({
      where: {
        id: {
          in: ids
        }
      }
    });

    return NextResponse.json(
      { 
        message: `${result.count} team members deleted successfully`,
        count: result.count 
      }
    );
  } catch (error: any) {
    console.error("Error deleting batch team members:", error);

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