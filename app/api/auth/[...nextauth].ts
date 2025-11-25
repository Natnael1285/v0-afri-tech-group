import NextAuth, { User, Session } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaClient, UserRole } from '@prisma/client';
import bcrypt from 'bcryptjs';
import { JWT } from 'next-auth/jwt';

const prisma = new PrismaClient();

// Extend built-in types
declare module 'next-auth' {
  interface User {
    id: string;
    role: UserRole;
    username: string;
  }

  interface Session {
    user: {
      id: string;
      role: UserRole;
      username: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
    }
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id: string;
    role: UserRole;
    username: string;
  }
}

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials): Promise<User | null> {
        if (!credentials) {
          return null;
        }
        
        const { username, password } = credentials;

        try {
          const user = await prisma.user.findFirst({
            where: {
              username: username
            },
          });

          if (!user) {
            return null;  
          }

          const isPasswordValid = await bcrypt.compare(password, user.password);
          if (!isPasswordValid) {
            return null;  
          }

          // Return user object with custom fields
          return {
            id: user.id,
            role: user.role,
            username: user.username
          };
        } catch (error) {
          console.error('Authorization error:', error);
          return null;
        } finally {
          await prisma.$disconnect();
        }
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      // Add custom fields to the token when user signs in
      if (user) {
        token.id = user.id;
        token.role = user.role;
        token.username = user.username;
      }
      return token;
    },
    
    async session({ session, token }): Promise<Session> {
      // Add custom fields to the session
      if (session.user) {
        session.user.id = token.id as string;
        session.user.role = token.role as UserRole;
        session.user.username = token.username as string;
      }
      return session;
    },
  },

  pages: {
    signIn: '/auth/signin',
    error: '/auth/error',
  },

  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, 
  },

  secret: process.env.JWT_SECRET_KEY,
});