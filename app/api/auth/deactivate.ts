import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import { z } from 'zod';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

const deactivateSchema = z.object({
  userId: z.string().optional(),
  username: z.string().optional(),
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const token = req.cookies.session_token;

    if (!token) {
      return res.status(401).json({ message: 'Unauthorized: No token provided' });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY!) as {
      userId: string;
      role: string;
    };
    if (decoded.role !== 'ADMIN') {
      return res.status(403).json({ message: 'Forbidden: SUPERADMIN access required' });
    }

    const validatedData = deactivateSchema.parse(req.body);
    const userToDeactivate = await prisma.user.findFirst({
      where: {
        OR: [
          ...(validatedData.userId ? [{ id: validatedData.userId }] : []),
          ...(validatedData.username ? [{ username: validatedData.username }] : [])
        ]
      }
    });

    if (!userToDeactivate) {
      return res.status(404).json({ message: 'User not found' });
    }
    if (userToDeactivate.id === decoded.userId) {
      return res.status(403).json({ message: 'Cannot deactivate your own account' });
    }

    const newStatus = !userToDeactivate.status;
    await prisma.user.update({
      where: { id: userToDeactivate.id },
      data: { 
        status: newStatus,
        isLoggedIn: newStatus ? userToDeactivate.isLoggedIn : false,
        sessionId: newStatus ? userToDeactivate.sessionId : null,
      },
    });

    return res.status(200).json({
      success: true,
      message: `User ${newStatus ? 'activated' : 'deactivated'} successfully`,
      data: {
        userId: userToDeactivate.id,
        status: newStatus ? 'Active' : 'Inactive'
      }
    });

  } catch (error) {
    console.error('Deactivation error:', error);
    
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        message: 'Validation failed',
        errors: error.issues
      });
    }
    
    if (error instanceof jwt.JsonWebTokenError) {
      return res.status(401).json({ message: 'Invalid or expired token' });
    }

    return res.status(500).json({
      message: 'Internal server error',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}