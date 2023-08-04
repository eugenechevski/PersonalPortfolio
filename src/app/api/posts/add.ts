/* eslint-disable import/no-anonymous-default-export */
import clientPromise from "@/lib/mongodb";
import { type NextApiRequest, type NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const post = req.body;
    const client = await clientPromise;
    const db = client.db("personal_blog");

    await db.collection("posts").insertOne({
      post,
    });

    res.status(200).json(post);
  } catch (e) {
    console.error(e);
    throw new Error(e).message;
  }
};
