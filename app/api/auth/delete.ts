import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import { z } from 'zod';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

const deleteSchema = z.object({
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
      return res.status(403).json({ message: 'Forbidden: ADMIN access required' });
    }

    const validatedData = deleteSchema.parse(req.body);
    const userToDelete = await prisma.user.findFirst({
      where: {
        OR: [
          ...(validatedData.userId ? [{ id: validatedData.userId }] : []),
          ...(validatedData.username ? [{ username: validatedData.username }] : [])
        ]
      }
    });

    if (!userToDelete) {
      return res.status(404).json({ message: 'User not found' });
    }
    if (userToDelete.id === decoded.userId) {
      return res.status(403).json({ message: 'Cannot delete your own account' });
    }

    // Actually delete the user
    await prisma.user.delete({
      where: { id: userToDelete.id }
    });

    return res.status(200).json({
      success: true,
      message: 'User deleted successfully',
      data: {
        userId: userToDelete.id,
        username: userToDelete.username
      }
    });

  } catch (error) {
    console.error('Deletion error:', error);
    
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        message: 'Validation failed',
        errors: error.errors
      });
    }
    
    if (error instanceof jwt.JsonWebTokenError) {
      return res.status(401).json({ message: 'Invalid or expired token' });
    }

    return res.status(500).json({
      message: 'Internal server error',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  } finally {
    await prisma.$disconnect();
  }
}