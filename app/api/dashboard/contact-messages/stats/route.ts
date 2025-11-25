import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { authenticate, requireAuth } from "@/middleware/auth";

// GET - Get contact messages statistics (admin only)
export async function GET(request: NextRequest) {
  try {
    const user = await authenticate(request);
    requireAuth(user);

    const { searchParams } = new URL(request.url);
    const days = parseInt(searchParams.get('days') || '30');

    const startDate = new Date();
    startDate.setDate(startDate.getDate() - days);

    const [
      totalMessages,
      todayMessages,
      recentMessages,
      messagesByDay,
      topSenders
    ] = await Promise.all([
      // Total messages count
      prisma.contactMessage.count(),

      // Today's messages count
      prisma.contactMessage.count({
        where: {
          createdAt: {
            gte: new Date(new Date().setHours(0, 0, 0, 0))
          }
        }
      }),

      // Recent messages (last X days)
      prisma.contactMessage.count({
        where: {
          createdAt: {
            gte: startDate
          }
        }
      }),

      // Messages grouped by day for chart
      prisma.contactMessage.groupBy({
        by: ['createdAt'],
        where: {
          createdAt: {
            gte: startDate
          }
        },
        _count: {
          _all: true
        },
        orderBy: {
          createdAt: 'asc'
        }
      }),

      // Top message senders
      prisma.contactMessage.groupBy({
        by: ['email'],
        _count: {
          _all: true
        },
        orderBy: {
          _count: {
            id: 'desc'
          }
        },
        take: 10
      })
    ]);

    // Format daily data for charts
    const dailyData = messagesByDay.map(day => ({
      date: day.createdAt.toISOString().split('T')[0],
      count: day._count._all
    }));

    return NextResponse.json({
      overview: {
        total: totalMessages,
        today: todayMessages,
        recent: recentMessages,
        period: `${days} days`
      },
      dailyData,
      topSenders: topSenders.map(sender => ({
        email: sender.email,
        count: sender._count._all
      }))
    });
  } catch (error: any) {
    console.error("Error fetching contact message statistics:", error);

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