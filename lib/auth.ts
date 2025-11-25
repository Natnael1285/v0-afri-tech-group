// lib/auth.ts
import { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';
import { UserRole } from '@prisma/client';
import { prisma } from './prisma';

const { serialize } = require('cookie');

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY!;

export interface AuthenticatedRequest extends NextApiRequest {
  userId?: string;
  userRole?: UserRole;
  user?: any;
}

export const authenticate = (handler: (req: AuthenticatedRequest, res: NextApiResponse) => Promise<void>) => {
  return async (req: AuthenticatedRequest, res: NextApiResponse) => {
    const token = req.cookies.session_token || req.headers.authorization?.split(' ')[1];

    if (!token) {
      return res.status(401).json({ message: 'Unauthorized: No token provided' });
    }

    try {
      const decoded = jwt.verify(token, JWT_SECRET_KEY) as { 
        userId: string;
        role: UserRole;
        username: string;
      };

      const user = await prisma.user.findUnique({
        where: { id: decoded.userId },
      });

      if (!user) {
        res.setHeader('Set-Cookie', 
          serialize('session_token', '', { maxAge: -1, path: '/' })
        );
        return res.status(401).json({ message: 'Session expired or invalid' });
      }

      req.userId = decoded.userId;
      req.userRole = decoded.role;
      req.user = {
        ...decoded,
        profile: user.username
      };
      
      return handler(req, res);
    } catch (error) {
      console.error('Authentication error:', error);
      return res.status(401).json({ message: 'Invalid or expired token' });
    }
  };
};