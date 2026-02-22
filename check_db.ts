
import { prisma } from "./src/lib/db";

async function check() {
  try {
    const count = await prisma.servicePage.count();
    console.log(`ServicePage count: ${count}`);
    const services = await prisma.servicePage.findMany();
    console.log(JSON.stringify(services, null, 2));
  } catch (e) {
    console.error(e);
  } finally {
    await prisma.$disconnect();
  }
}

check();
