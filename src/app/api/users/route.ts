// Endpoint for handling user related requests

import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  const client = await clientPromise;
  const db = client.db("personal_blog");
  const users = await db.collection<AdminUser>("users").find({}).toArray();

  return NextResponse.json(users);
}

export async function POST(req: Request) {
  const user: AdminUser = await req.json();
  const client = await clientPromise;
  const db = client.db("personal_blog");
  const result = await db.collection<AdminUser>("users").insertOne(user);

  return NextResponse.json(result);
}

export async function PUT(req: Request) {
  const user = (await req.json()) as AdminUser;
  const client = await clientPromise;
  const db = client.db("personal_blog");
  const result = await db
    .collection<AdminUser>("users")
    .updateOne({ _id: user._id }, { $set: user });

  return NextResponse.json(result);
}

export async function DELETE(req: Request) {
  // Obtain id from request query
  const userId = await req.text();
  const client = await clientPromise;
  const db = client.db("personal_blog");

  const result = await db.collection<AdminUser>("users").deleteOne({
    _id: userId,
  });

  return NextResponse.json(result);
}