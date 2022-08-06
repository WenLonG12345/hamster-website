import { PrismaClient } from "@prisma/client";

let prismaClient: PrismaClient;

declare global {
  var prismaClient: PrismaClient;
}

if(process.env.NODE_ENV === 'production') {
  prismaClient = new PrismaClient();
} else {
  if(!global.prismaClient) {
    global.prismaClient = new PrismaClient();
  }

  prismaClient = global.prismaClient;
}

async function main() {
  await prismaClient.$connect();
}

main()
  .catch((err) => {
    console.error(err.message);
  })
  .finally(async () => {
    await prismaClient.$disconnect();
  });


export default prismaClient;