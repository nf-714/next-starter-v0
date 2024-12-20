import { PrismaClient } from "@prisma/client";

let prisma: PrismaClient;

declare global {
  // Allow `globalThis.prisma` to be used as a PrismaClient instance
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

export default prisma;
