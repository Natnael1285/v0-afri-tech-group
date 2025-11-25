import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { authenticate, requireAuth } from "@/middleware/auth";

const teamMemberSchema = z.object({
  name: z.string().min(1, "Name is required").max(100, "Name should not exceed 100 characters").optional(),
  position: z.string().min(1, "Position is required").max(100, "Position should not exceed 100 characters").optional(),
  description: z.string().min(10, "Description should be at least 10 characters long").max(500, "Description should not exceed 500 characters").optional(),
  photo: z.string().url("Photo must be a valid URL").optional().or(z.literal("")),
});

interface RouteParams {
  params: {
    id: string;
  };
}

// GET - Get specific team member by ID (public)
export async function GET(request: NextRequest, { params }: RouteParams) {
  try {
    const { id } = params;

    const teamMember = await prisma.teamMember.findUnique({
      where: { id },
    });

    if (!teamMember) {
      return NextResponse.json(
        { message: "Team member not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(teamMember);
  } catch (error) {
    console.error("Error fetching team member:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

// PUT - Update entire team member (admin only)
export async function PUT(request: NextRequest, { params }: RouteParams) {
  try {
    const user = await authenticate(request);
    requireAuth(user);

    const { id } = params;
    const body = await request.json();
    const validatedData = teamMemberSchema.parse(body);

    const teamMember = await prisma.teamMember.update({
      where: { id },
      data: validatedData,
    });

    return NextResponse.json(
      { message: "Team member updated successfully", data: teamMember }
    );
  } catch (error: any) {
    console.error("Error updating team member:", error);

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
        { message: "Team member not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

// PATCH - Partially update team member (admin only)
export async function PATCH(request: NextRequest, { params }: RouteParams) {
  try {
    const user = await authenticate(request);
    requireAuth(user);

    const { id } = params;
    const body = await request.json();
    const validatedData = teamMemberSchema.partial().parse(body);

    // Check if team member exists
    const existingTeamMember = await prisma.teamMember.findUnique({
      where: { id },
    });

    if (!existingTeamMember) {
      return NextResponse.json(
        { message: "Team member not found" },
        { status: 404 }
      );
    }

    const teamMember = await prisma.teamMember.update({
      where: { id },
      data: validatedData,
    });

    return NextResponse.json(
      { message: "Team member updated successfully", data: teamMember }
    );
  } catch (error: any) {
    console.error("Error updating team member:", error);

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
        { message: "Team member not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

// DELETE - Delete team member (admin only)
export async function DELETE(request: NextRequest, { params }: RouteParams) {
  try {
    const user = await authenticate(request);
    requireAuth(user);

    const { id } = params;

    // Check if team member exists
    const existingTeamMember = await prisma.teamMember.findUnique({
      where: { id },
    });

    if (!existingTeamMember) {
      return NextResponse.json(
        { message: "Team member not found" },
        { status: 404 }
      );
    }

    await prisma.teamMember.delete({
      where: { id },
    });

    return NextResponse.json(
      { message: "Team member deleted successfully" }
    );
  } catch (error: any) {
    console.error("Error deleting team member:", error);

    if (error.message === 'Unauthorized') {
      return NextResponse.json(
        { message: "Unauthorized" },
        { status: 401 }
      );
    }

    if (error.code === 'P2025') {
      return NextResponse.json(
        { message: "Team member not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}