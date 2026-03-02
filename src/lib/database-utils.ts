import { prisma } from './db';

export async function safeDatabaseQuery<T>(
  query: () => Promise<T>,
  fallback?: T
): Promise<T | null> {
  try {
    return await query();
  } catch (error) {
    // Suppress database errors during build time
    if (process.env.NODE_ENV === 'production' || process.env.NEXT_PHASE === 'phase-production-build') {
      console.error('Database query suppressed during build:', error instanceof Error ? error.message : 'Unknown error');
      return fallback || null;
    }
    
    // In development, still show the error but don't crash
    console.error('Database query error:', error);
    return fallback || null;
  }
}

export async function isDatabaseAvailable(): Promise<boolean> {
  try {
    await prisma.$queryRaw`SELECT 1`;
    return true;
  } catch {
    return false;
  }
}
