// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getAllHamsters } from "../../../../prisma/hamster";
import { isValidBody } from "../../../utils";

export type HamsterCoverArgs = {
  coverImg: string;
  title: string;
  description: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    switch (req.method) {
      case "POST": {
        return res.status(200).json(req.body);
      }
    }
  } catch (err) {
    const error = err as Error;
    return res.status(500).json(error);
  }
}
