import { HamsterCoverArgs } from "../src/pages/api/hamster/cover";
import prisma from "./db";

export const getAllHamsters = async () => {
  return await prisma.hamster.findMany({});
}

export const createCover = async (data: HamsterCoverArgs) => {
  return await prisma.cover.create({data});
}