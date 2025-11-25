// middleware/auth.ts
import { NextRequest } from 'next/server';
import jwt from 'jsonwebtoken';

export interface AuthUser {
  userId: string;
  username: string;
  role: string;
}

export async function authenticate(request: NextRequest): Promise<AuthUser | null> {
  try {
    const token = request.cookies.get('session_token')?.value || 
                  request.headers.get('authorization')?.replace('Bearer ', '');

    if (!token) {
      return null;
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY!) as AuthUser;
    return decoded;
  } catch (error) {
    console.error('Authentication error:', error);
    return null;
  }
}

export function requireAuth(user: AuthUser | null) {
  if (!user) {
    throw new Error('Unauthorized');
  }
}