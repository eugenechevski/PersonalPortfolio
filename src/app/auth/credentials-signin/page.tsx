"use client";

import { userNamePattern } from "@/lib/constants";
import { signIn } from "next-auth/react";
import { useState, type FormEvent } from "react";
import Input from "@/components/Input";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";


export default function SignIn() {
  const router = useRouter();

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const res = await signIn("credentials", {
      username: userName,
      password,
      callbackUrl: "/admin",
      redirect: false,
    });

    console.log(res);

    if (!res?.error) {
      router.push('/admin');
    } else {
      setError("invalid email or password");
    }
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center w-1/3 h-1/3 gap-3"
      >
        {error && <p className="text-red-500">{error}</p>}
        <Input
          type="text"
          name="userName"
          placeholder="Username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          pattern={userNamePattern}
          className="w-full"
          required
        />
        <Input
          className="w-full"
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button type="submit" textContent="Sign in" />
      </form>
    </div>
  );
}
