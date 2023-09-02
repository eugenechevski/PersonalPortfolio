// Route handler for replies

import clientPromise from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  // Load database
  const client = await clientPromise;
  const db = client.db("personal_blog");

  // Obtain replyId from request query
  const url = new URL(req.url);
  const replyId = url.searchParams.get("replyId");

  // Fetch reply from database
  const reply = await db
    .collection<IReply>("replies")
    .findOne({ _id: replyId });

  return NextResponse.json(reply);
}

export async function POST(req: Request) {
  // Obtain reply from request body
  const reply: IReply = await req.json();

  // Load database
  const client = await clientPromise;
  const db = client.db("personal_blog");

  // Insert reply into database
  const insertResult = await db.collection<IReply>("replies").insertOne(reply);

  return NextResponse.json(insertResult);
}

export async function PUT(req: Request) {
  // Obtain reply from request body
  const reply = (await req.json()) as IReply;

  // Load database
  const client = await clientPromise;
  const db = client.db("personal_blog");

  // Update reply in database
  const result = await db
    .collection<IReply>("replies")
    .updateOne({ _id: reply._id }, { $set: reply });

  return NextResponse.json(result);
}

export async function DELETE(req: Request) {
  // Obtain replyId from url
  const replyId = await req.text();

  // Load database
  const client = await clientPromise;
  const db = client.db("personal_blog");

  // Delete reply from database
  const deleteResult = await db.collection<IReply>("replies").deleteOne({
    _id: replyId,
  });

  return NextResponse.json(deleteResult);
}
