import clientPromise from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const userName = url.searchParams.get("userName");

  const client = await clientPromise;
  const db = client.db("personal_blog");
  const user = await db.collection<AdminUser>("users").findOne({ userName });

  return NextResponse.json(user);
}
