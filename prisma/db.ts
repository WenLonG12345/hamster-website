import { PrismaClient } from "@prisma/client";

let prisma: PrismaClient;

declare global {
  var prisma: PrismaClient;
}

if(process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  if(!global.prisma) {
    global.prisma = new PrismaClient();
  }

  prisma = global.prisma;
}

async function main() {
  await prisma.$connect();
}

main()
  .catch((err) => {
    console.error(err.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });


export default prisma;