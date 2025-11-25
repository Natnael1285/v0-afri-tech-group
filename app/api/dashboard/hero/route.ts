// app/api/hero/route.ts
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { authenticate, requireAuth } from "@/middleware/auth";

const heroSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
});

// GET - Get hero section data
export async function GET() {
  try {
    const hero = await prisma.heroSection.findFirst({
      orderBy: { createdAt: 'desc' }
    });

    return NextResponse.json(hero || null);
  } catch (error) {
    console.error("Error fetching hero section:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

// POST - Create hero section
export async function POST(request: NextRequest) {
  try {
    const user = await authenticate(request);
    requireAuth(user);

    const body = await request.json();
    const validatedData = heroSchema.parse(body);

    // Check if hero section already exists
    const existingHero = await prisma.heroSection.findFirst();
    
    if (existingHero) {
      return NextResponse.json(
        { message: "Hero section already exists. Use PUT to update." },
        { status: 400 }
      );
    }

    const hero = await prisma.heroSection.create({
      data: validatedData,
    });

    return NextResponse.json(
      { message: "Hero section created successfully", data: hero },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Error creating hero section:", error);

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

// PUT - Update hero section
export async function PUT(request: NextRequest) {
  try {
    const user = await authenticate(request);
    requireAuth(user);

    const body = await request.json();
    const validatedData = heroSchema.parse(body);

    // Get the first hero section (assuming only one exists)
    const existingHero = await prisma.heroSection.findFirst();
    
    if (!existingHero) {
      return NextResponse.json(
        { message: "Hero section not found. Use POST to create." },
        { status: 404 }
      );
    }

    const hero = await prisma.heroSection.update({
      where: { id: existingHero.id },
      data: validatedData,
    });

    return NextResponse.json(
      { message: "Hero section updated successfully", data: hero }
    );
  } catch (error: any) {
    console.error("Error updating hero section:", error);

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