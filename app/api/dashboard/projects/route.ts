import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { authenticate, requireAuth } from "@/middleware/auth";

const projectSchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().min(1, "Description is required"),
  link: z.preprocess(
    (val) => {
      if (!val || val === "" || val === null) return null;
      return val;
    },
    z.union([z.string().url("Link must be a valid URL"), z.null()]).optional()
  ),
  photo: z.preprocess(
    (val) => {
      if (!val || val === "" || val === null) return null;
      return val;
    },
    z.union([z.string().url("Photo must be a valid URL"), z.null()]).optional()
  ),
});

// GET - Get all projects
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = searchParams.get('limit');
    const orderBy = searchParams.get('orderBy') || 'desc';

    const projects = await prisma.project.findMany({
      orderBy: { createdAt: orderBy as 'asc' | 'desc' },
      take: limit ? parseInt(limit) : undefined,
    });

    return NextResponse.json(projects);
  } catch (error) {
    console.error("Error fetching projects:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

// POST - Create a new project
export async function POST(request: NextRequest) {
  try {
    const user = await authenticate(request);
    requireAuth(user);

    const body = await request.json();
    const validatedData = projectSchema.parse(body);

    // Transform null/empty strings to undefined for Prisma
    const projectData = {
      name: validatedData.name,
      description: validatedData.description,
      link: validatedData.link || undefined,
      photo: validatedData.photo || undefined,
    };

    const project = await prisma.project.create({
      data: projectData,
    });

    return NextResponse.json(
      { message: "Project created successfully", data: project },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Error creating project:", error);

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