import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { authenticate, requireAuth } from "@/middleware/auth";

const aboutPageSchema = z.object({
  mission: z.string().min(1, "Mission is required").max(2000, "Mission should not exceed 2000 characters"),
  vision: z.string().min(1, "Vision is required").max(2000, "Vision should not exceed 2000 characters"),
});

// GET - Get about page content (public)
export async function GET() {
  try {
    const aboutPage = await prisma.aboutPage.findFirst({
      orderBy: { createdAt: 'desc' }
    });

    return NextResponse.json(aboutPage || null);
  } catch (error) {
    console.error("Error fetching about page:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

// POST - Create about page content (admin only)
export async function POST(request: NextRequest) {
  try {
    const user = await authenticate(request);
    requireAuth(user);

    const body = await request.json();
    const validatedData = aboutPageSchema.parse(body);

    // Check if about page already exists
    const existingAboutPage = await prisma.aboutPage.findFirst();
    
    if (existingAboutPage) {
      return NextResponse.json(
        { message: "About page already exists. Use PUT to update." },
        { status: 400 }
      );
    }

    // Use raw SQL to handle title field that exists in DB but Prisma client doesn't know about yet
    // The Prisma client needs to be regenerated after schema changes
    await prisma.$executeRaw`
      INSERT INTO "AboutPage" (id, "mission", "vision", description, title, "createdAt", "updatedAt")
      VALUES (gen_random_uuid()::text, ${validatedData.mission}, ${validatedData.vision}, '', 'About Us', NOW(), NOW())
    `;
    
    // Fetch the created record
    const aboutPage = await prisma.aboutPage.findFirst({
      orderBy: { createdAt: 'desc' }
    });

    return NextResponse.json(
      { message: "About page created successfully", data: aboutPage },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Error creating about page:", error);

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

// PUT - Update about page content (admin only)
export async function PUT(request: NextRequest) {
  try {
    const user = await authenticate(request);
    requireAuth(user);

    const body = await request.json();
    const validatedData = aboutPageSchema.parse(body);

    // Get the first about page (assuming only one exists)
    const existingAboutPage = await prisma.aboutPage.findFirst();
    
    if (!existingAboutPage) {
      return NextResponse.json(
        { message: "About page not found. Use POST to create." },
        { status: 404 }
      );
    }

    const aboutPage = await prisma.aboutPage.update({
      where: { id: existingAboutPage.id },
      data: {
        ...validatedData,
        description: existingAboutPage.description || "", // Preserve existing description or use empty string
      },
    });

    return NextResponse.json(
      { message: "About page updated successfully", data: aboutPage }
    );
  } catch (error: any) {
    console.error("Error updating about page:", error);

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