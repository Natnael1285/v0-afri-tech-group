import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { authenticate, requireAuth } from "@/middleware/auth";

const contactMessageSchema = z.object({
  email: z.string().email("Valid email is required"),
  message: z.string()
    .min(10, "Message should be at least 10 characters long")
    .max(1000, "Message should not exceed 1000 characters"),
});

// GET - Get all contact messages with pagination and filtering (admin only)
export async function GET(request: NextRequest) {
  try {
    const user = await authenticate(request);
    requireAuth(user);

    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '20');
    const email = searchParams.get('email');
    const sortBy = searchParams.get('sortBy') || 'createdAt';
    const sortOrder = searchParams.get('sortOrder') || 'desc';

    const skip = (page - 1) * limit;

    // Build where clause for filtering
    const where = email ? {
      email: {
        contains: email,
        mode: 'insensitive' as const
      }
    } : {};

    const [messages, total] = await Promise.all([
      prisma.contactMessage.findMany({
        where,
        orderBy: {
          [sortBy]: sortOrder
        },
        take: limit,
        skip: skip,
        select: {
          id: true,
          email: true,
          message: true,
          createdAt: true,
        }
      }),
      prisma.contactMessage.count({ where })
    ]);

    return NextResponse.json({
      messages,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
        hasNext: page < Math.ceil(total / limit),
        hasPrev: page > 1
      }
    });
  } catch (error: any) {
    console.error("Error fetching contact messages:", error);

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

// POST - Create a new contact message (public)
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = contactMessageSchema.parse(body);

    // Optional: Add rate limiting check here
    // const isRateLimited = await checkRateLimit(validatedData.email);
    // if (isRateLimited) {
    //   return NextResponse.json(
    //     { message: "Too many messages. Please try again later." },
    //     { status: 429 }
    //   );
    // }

    const contactMessage = await prisma.contactMessage.create({
      data: validatedData,
    });

    // Here you can add email notification logic
    // await sendContactNotification(validatedData);

    return NextResponse.json(
      { 
        message: "Thank you for your message! We'll get back to you soon.",
        data: { id: contactMessage.id }
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Error creating contact message:", error);

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

// DELETE - Delete multiple contact messages (admin only)
export async function DELETE(request: NextRequest) {
  try {
    const user = await authenticate(request);
    requireAuth(user);

    const body = await request.json();
    const { ids } = z.object({
      ids: z.array(z.string().uuid()).min(1, "At least one ID is required")
    }).parse(body);

    const result = await prisma.contactMessage.deleteMany({
      where: {
        id: {
          in: ids
        }
      }
    });

    return NextResponse.json(
      { 
        message: `${result.count} contact messages deleted successfully`,
        count: result.count 
      }
    );
  } catch (error: any) {
    console.error("Error deleting contact messages:", error);

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