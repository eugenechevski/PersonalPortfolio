/* eslint-disable import/no-anonymous-default-export */
import clientPromise from "@/lib/mongodb";
import { type NextApiRequest, type NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const client = await clientPromise;
    const db = client.db("personal_blog");
    const posts = await db.collection("posts").find({}).toArray();

    res.status(200).json(posts);
  } catch (e) {
    console.error(e);
    throw new Error(e).message;
  }
};