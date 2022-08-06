import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.$connect();

  const created = await prisma.hamster.createMany({
    data: [
      { name: "灰灰", description: "这个是灰灰的主页" },
      { name: "米米", description: "这个是米米的主页" },
      { name: "番薯", description: "这个是番薯的主页" },
      { name: "木薯", description: "这个是木薯的主页" },
      { name: "小小", description: "这个是小小的主页" },
      { name: "豆豆", description: "这个是豆豆的主页" },
      { name: "肉包子", description: "这个是肉包子的主页" },
      { name: "小笼包", description: "这个是小笼包的主页" },
      { name: "沫沫", description: "这个是沫沫的主页" },
    ],
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
