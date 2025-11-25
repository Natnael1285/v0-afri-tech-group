import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { authenticate, requireAuth } from "@/middleware/auth";

const projectSchema = z.object({
  name: z.string().min(1, "Name is required").optional(),
  description: z.string().min(1, "Description is required").optional(),
  link: z.preprocess(
    (val) => (val === "" || val === null ? null : val),
    z.union([z.string().url("Link must be a valid URL"), z.null()]).optional()
  ),
  photo: z.preprocess(
    (val) => (val === "" || val === null ? null : val),
    z.union([z.string().url("Photo must be a valid URL"), z.null()]).optional()
  ),
});

interface RouteParams {
  params: {
    id: string;
  };
}

// GET - Get specific project by ID
export async function GET(request: NextRequest, { params }: RouteParams) {
  try {
    const { id } = params;

    const project = await prisma.project.findUnique({
      where: { id },
    });

    if (!project) {
      return NextResponse.json(
        { message: "Project not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(project);
  } catch (error) {
    console.error("Error fetching project:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

// PUT - Update entire project
export async function PUT(request: NextRequest, { params }: RouteParams) {
  try {
    const user = await authenticate(request);
    requireAuth(user);

    const { id } = params;
    const body = await request.json();
    const validatedData = projectSchema.parse(body);

    // Transform null/empty strings to undefined for Prisma
    const projectData: any = {};
    if (validatedData.name !== undefined) projectData.name = validatedData.name;
    if (validatedData.description !== undefined) projectData.description = validatedData.description;
    if (validatedData.link !== undefined) projectData.link = validatedData.link || undefined;
    if (validatedData.photo !== undefined) projectData.photo = validatedData.photo || undefined;

    const project = await prisma.project.update({
      where: { id },
      data: projectData,
    });

    return NextResponse.json(
      { message: "Project updated successfully", data: project }
    );
  } catch (error: any) {
    console.error("Error updating project:", error);

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
        { message: "Project not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

// PATCH - Partially update project
export async function PATCH(request: NextRequest, { params }: RouteParams) {
  try {
    const user = await authenticate(request);
    requireAuth(user);

    const { id } = params;
    const body = await request.json();
    const validatedData = projectSchema.partial().parse(body);

    // Check if project exists
    const existingProject = await prisma.project.findUnique({
      where: { id },
    });

    if (!existingProject) {
      return NextResponse.json(
        { message: "Project not found" },
        { status: 404 }
      );
    }

    // Transform null/empty strings to undefined for Prisma
    const projectData: any = {};
    if (validatedData.name !== undefined) projectData.name = validatedData.name;
    if (validatedData.description !== undefined) projectData.description = validatedData.description;
    if (validatedData.link !== undefined) projectData.link = validatedData.link || undefined;
    if (validatedData.photo !== undefined) projectData.photo = validatedData.photo || undefined;

    const project = await prisma.project.update({
      where: { id },
      data: projectData,
    });

    return NextResponse.json(
      { message: "Project updated successfully", data: project }
    );
  } catch (error: any) {
    console.error("Error updating project:", error);

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
        { message: "Project not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

// DELETE - Delete project
export async function DELETE(request: NextRequest, { params }: RouteParams) {
  try {
    const user = await authenticate(request);
    requireAuth(user);

    const { id } = params;

    // Check if project exists
    const existingProject = await prisma.project.findUnique({
      where: { id },
    });

    if (!existingProject) {
      return NextResponse.json(
        { message: "Project not found" },
        { status: 404 }
      );
    }

    await prisma.project.delete({
      where: { id },
    });

    return NextResponse.json(
      { message: "Project deleted successfully" }
    );
  } catch (error: any) {
    console.error("Error deleting project:", error);

    if (error.message === 'Unauthorized') {
      return NextResponse.json(
        { message: "Unauthorized" },
        { status: 401 }
      );
    }

    if (error.code === 'P2025') {
      return NextResponse.json(
        { message: "Project not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}