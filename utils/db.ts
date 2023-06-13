import { PrismaClient } from "@prisma/client";
// globalThis left of the dot

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}
// because of nextjs hot reload, sometimes it the client will crash after x amount of reloads

// Type Annotations
export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ['query'],
  })

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
