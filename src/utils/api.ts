import { HamsterCover } from "../types";
import request from "./request"

export const getCover = async (): Promise<HamsterCover> =>  {
  const res = await request('/api/hamster/cover')
  return res.data;
}

export const updateCoverDetails = async(data: HamsterCover) => {
  return await request('/api/hamster/cover', {
    method: "PATCH",
    data
  })
}