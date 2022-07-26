import prisma from "./db";

export const getAllHamsters = async () => {
  return await prisma.hamster.findMany({});
}