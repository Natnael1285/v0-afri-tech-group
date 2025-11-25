import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { authenticate, requireAuth } from "@/middleware/auth";

const bulkOperationsSchema = z.object({
  operation: z.enum(['deleteAll', 'deleteByEmail', 'markAsRead']),
  email: z.string().email().optional(),
  ids: z.array(z.string().uuid()).optional(),
});

// POST - Perform bulk operations on contact messages (admin only)
export async function POST(request: NextRequest) {
  try {
    const user = await authenticate(request);
    requireAuth(user);

    const body = await request.json();
    const validatedData = bulkOperationsSchema.parse(body);

    let result;
    let message = '';

    switch (validatedData.operation) {
      case 'deleteAll':
        result = await prisma.contactMessage.deleteMany({});
        message = `All ${result.count} contact messages deleted successfully`;
        break;

      case 'deleteByEmail':
        if (!validatedData.email) {
          return NextResponse.json(
            { message: "Email is required for this operation" },
            { status: 400 }
          );
        }
        result = await prisma.contactMessage.deleteMany({
          where: {
            email: validatedData.email
          }
        });
        message = `${result.count} messages from ${validatedData.email} deleted successfully`;
        break;

      case 'markAsRead':
        // Note: You would need to add a 'read' field to your ContactMessage model for this
        // For now, we'll just return a message
        message = "Mark as read functionality requires adding a 'read' field to the model";
        break;

      default:
        return NextResponse.json(
          { message: "Invalid operation" },
          { status: 400 }
        );
    }

    return NextResponse.json({
      message,
      count: result?.count || 0
    });
  } catch (error: any) {
    console.error("Error performing bulk operation:", error);

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