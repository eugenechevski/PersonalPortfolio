// Page for editing a user

"use client";

import Input from "@/components/Input";
import Button from "@/components/Button";
import { useState, useEffect } from "react";

import {
  userNamePattern,
  emailPattern,
  passwordPattern,
} from "@/lib/constants";

export default function Page() {
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [title, setTitle] = useState<string>("");

  // Get user data
  useEffect(() => {}, []);

  const updateUser = (e) => {
    e.preventDefault();

    console.log({
      fullName,
      email,
      password,
      title,
    });
  };

  return (
    <section className="w-full h-full flex items-center justify-center">
      <form
        className="w-1/2 h-1/2 flex flex-col justify-center items-center gap-5"
        onSubmit={updateUser}
      >
        <Input
          name="fullName"
          placeholder="Full name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          size="lg"
          pattern={userNamePattern}
        />
        <Input
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          size="lg"
          pattern={passwordPattern}
        />
        <Input
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          size="lg"
          pattern={emailPattern}
        />
        {/** List of options */}
        <select
          className="text-2xl rounded-3xl shadow-2xl drop-shadow-2xl text-[#6B21A5] hover:opacity-[35%] outline-none w-1/2 p-4"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        >
          <option value="" disabled>
            Select a title
          </option>
          <option value="Founder">Founder</option>
          <option value="Editor">Editor</option>
          <option value="Author">Writer</option>
        </select>
        <Button textContent="Update" type="submit" />
      </form>
    </section>
  );
}
