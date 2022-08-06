// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Hamster } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import prismaClient from "../../../prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    switch (req.method) {
      case "GET": {
        const hamsters = await prismaClient.hamster.findMany({});
        return res.status(200).json(hamsters);
      }

      case "POST": {
        console.log('api', {req});
      }

      case "PATCH": {
        const data: Hamster = req.body;
        const result = await prismaClient.hamster.update({
          where: {
            id: data.id
          },
          data: {
            name: data.name,
            description: data.description
          }
        })
        return res.status(200).json(result);
      }
    }
  } catch (err) {
    const error = err as Error;
    return res.status(500).json(error);
  }
}
