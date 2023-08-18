"use client";

import Button from "@/components/Button";
import Link from "next/link";
import { signOut } from "next-auth/react";

export default function SignOut() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center gap-5">
      <p className="text-3xl font-bold text-white">
        Are you sure you want to sign-out?
      </p>
      <div className="flex gap-5">
        <Button
          textContent="Yes"
          hanlderOnClick={() => signOut({ callbackUrl: "/admin" })}
        />
        <Link href={"/admin"}>
          <Button textContent="No" />
        </Link>
      </div>
    </div>
  );
}
