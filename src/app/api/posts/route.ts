// Defines all CRUD routes for the Posts model.

import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  const client = await clientPromise;
  const db = client.db("personal_blog");
  const posts = await db.collection<IPost>("posts").find({}).toArray();

  return NextResponse.json(posts);
}

export async function POST(req: Request) {
  const post: IPost = await req.json();
  const client = await clientPromise;
  const db = client.db("personal_blog");
  const result = await db
    .collection<IPost>("posts")
    .insertOne(post);

  return NextResponse.json(result);
}

export async function PUT(req: Request) {
  const post = (await req.json()) as IPost;
  const client = await clientPromise;
  const db = client.db("personal_blog");
  const result = await db
    .collection<IPost>("posts")
    .updateOne({ _id: post._id }, { $set: post });

  return NextResponse.json(result);
}

export async function DELETE(req: Request) {
  // Obtain id from request query
  const postId = await req.text();
  const client = await clientPromise;
  const db = client.db("personal_blog");

  const result = await db.collection<IPost>("posts").deleteOne({
    _id: postId,
  });

  return NextResponse.json(result);
}
