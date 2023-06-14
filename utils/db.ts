import { PrismaClient } from "@prisma/client";

// globalThis same as, left of the dot
// because of nextjs hot reload, sometimes it the client will crash after x amount of reloads
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

// Type Annotations
export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ['query'],
  })

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
