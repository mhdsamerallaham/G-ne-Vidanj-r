import "dotenv/config";
import { defineConfig } from '@prisma/config';

export default defineConfig({
  // earlyAccess: true, // Removed to fix type error
  schema: 'prisma/schema.prisma',
  migrations: {
    seed: 'ts-node --compiler-options {"module":"CommonJS"} prisma/seed.ts',
  },
  datasource: {
    // provider: 'postgresql', // Removed to fix type error
    url: process.env.DATABASE_URL,
    // directUrl: process.env.DIRECT_URL, // Removed to fix type error
  },
});
