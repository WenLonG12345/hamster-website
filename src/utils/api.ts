import { Hamster, Photo } from "@prisma/client";
import { HamsterCover, HamsterPhotoArgs } from "../types";
import request from "./request";

export const getCover = async (): Promise<HamsterCover> => {
  const res = await request("/api/cover");
  return res.data;
};

export const updateCoverDetails = async (data: HamsterCover) => {
  return await request("/api/cover", {
    method: "PATCH",
    data,
  });
};

export const getAllHamsters = async (): Promise<Hamster[]> => {
  const res = await request("/api/hamster");
  return res.data;
};

export const uploadHamsterImage = async (data: HamsterPhotoArgs) => {
  return await request("/api/photo", {
    method: "POST",
    data,
  });
};

export const getPhotoByHamsterId = async (id: string): Promise<Photo[]> => {
  const res = await request(`/api/photo/${id}`);
  return res.data;
};

export const updateHamsterDescription = async (data: Hamster) => {
  return await request("/api/hamster", {
    method: "PATCH",
    data,
  });
};

export const updatePhotoDescription = async (data: Photo) =>  {
  return await request("/api/photo", {
    method: "PATCH",
    data
  })
}

export const deletePhoto = async (data: Photo) => {
  return await request("/api/photo", {
    method: "DELETE",
    data
  })
}
