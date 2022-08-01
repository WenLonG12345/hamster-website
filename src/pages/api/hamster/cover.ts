// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import NextCors from "nextjs-cors";
import { createCover, getAllHamsters, getCoverDetail } from "../../../../prisma/hamster";
import { HamsterCoverArgs } from "../../../types";
import { isValidBody } from "../../../utils";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await NextCors(req, res, {
    methods: ["GET", "POST"],
    origin: "*",
  });

  try {
    switch (req.method) {
      case "GET": {
        const result = await getCoverDetail();
        return res.status(200).json(result);
      }

      case "POST": {
        const data: HamsterCoverArgs = req.body;
        const result = await createCover(data);
        return res.status(200).json(result);
      }

      case "PUT": {
        
      }
    }
  } catch (err) {
    const error = err as Error;
    return res.status(500).json(error);
  }
}
