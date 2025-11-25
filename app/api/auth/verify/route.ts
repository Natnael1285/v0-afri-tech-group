import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { prisma } from "@/lib/prisma";

export async function GET(request: Request) {
  try {
    // Get the token from cookies
    const cookieHeader = request.headers.get("cookie");
    const cookies = cookieHeader?.split(";").reduce((acc, cookie) => {
      const [name, value] = cookie.trim().split("=");
      acc[name] = value;
      return acc;
    }, {} as Record<string, string>);

    const token = cookies?.session_token;

    if (!token) {
      return NextResponse.json({ message: "No token provided" }, { status: 401 });
    }

    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY!) as {
      userId: string;
      username: string;
      role: string;
    };

    // Get user from database
    const user = await prisma.user.findUnique({
      where: { id: decoded.userId },
      select: {
        id: true,
        username: true,
        role: true,
        createdAt: true,
      },
    });

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    // Return user data with initials
    const userWithInitials = {
      ...user,
      name: user.username,
      initials: user.username.charAt(0).toUpperCase(),
    };

    return NextResponse.json({ 
      user: userWithInitials 
    });
  } catch (error) {
    console.error("Auth verification error:", error);
    
    if (error instanceof jwt.JsonWebTokenError) {
      return NextResponse.json({ message: "Invalid token" }, { status: 401 });
    }
    
    if (error instanceof jwt.TokenExpiredError) {
      return NextResponse.json({ message: "Token expired" }, { status: 401 });
    }

    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}