import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.$connect();

  const created = await prisma.hamster.create({
    data: { name: "HuiHui", description: "This is HuiHui" },
  });
  console.log(created);

  const hamster = await prisma.hamster.findMany();
  console.log(hamster);
}

main()
  .catch((err) => {
    console.error(err.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
