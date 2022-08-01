import { HamsterCoverArgs } from "../src/types";
import prisma from "./db";

export const getAllHamsters = async () => {
  return await prisma.hamster.findMany({});
}

export const createCover = async (data: HamsterCoverArgs) => {
  return await prisma.cover.create({data});
}

export const getCoverDetail = async() => {
  return await prisma.cover.findFirst();
}

export const updateCoverDetail = async (data: HamsterCoverArgs) => {
  return await prisma.cover.update({
    where: {
      
    },
    data
  })
}