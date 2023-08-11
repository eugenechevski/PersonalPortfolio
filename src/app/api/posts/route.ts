// Defines all CRUD routes for the Posts model.

import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";

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
    .insertOne({ _id: new ObjectId(post.postId), ...post });

  return NextResponse.json(result);
}

export async function PUT(req: Request) {
  const { postId, title, content } = (await req.json()) as IPost;
  const client = await clientPromise;
  const db = client.db("personal_blog");
  const result = await db
    .collection<IPost>("posts")
    .updateOne({ _id: new ObjectId(postId) }, { $set: { title, content } });

  return NextResponse.json(result);
}

export async function DELETE(req: Request) {
  const postId: string = await req.json();
  const client = await clientPromise;
  const db = client.db("personal_blog");

  const result = await db.collection<IPost>("posts").deleteOne({
    _id: new ObjectId(postId),
  });

  return NextResponse.json(result);
}
