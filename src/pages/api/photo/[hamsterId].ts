// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import NextCors from "nextjs-cors";
import { HamsterCoverArgs, HamsterCover, HamsterPhotoArgs } from "../../../types";
import prismaClient from "../../../../prisma/client";
import { Photo } from "@prisma/client";

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
        const {hamsterId} = req.query;

        if(hamsterId) {
          const result = await prismaClient.photo.findMany({
            where: {
              hamsterId: hamsterId.toString(),
            },
          });
          return res.status(200).json(result);
        }
        
      }
    }
  } catch (err) {
    console.log({ err });
    const error = err as Error;
    return res.status(500).json(error);
  }
}
