// Page for creating a new post

"use client";

import Editor from "@/components/Editor";
import TextButton from "@/components/TextButton";
import { useState } from "react";

export default function Page() {
  const [title, setTitle] = useState("");
  const [formData, setFormData] = useState("");

  const save = () => {
    // TODO
  };

  const publish = () => {
    // TODO
  };

  return (
    <section className="h-full w-full flex flex-col justify-center items-center gap-5">
      {/** Title */}
      <input
        type="text"
        placeholder="Title"
        className="w-1/3 p-3 text-2xl rounded-3xl shadow-2xl drop-shadow-2xl text-[#6B21A5] mb-12 hover:opacity-[35%] outline-none"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Editor formData={formData} setFormData={setFormData} />
      {/** Buttons */}
      <div className="flex gap-5">
        <TextButton text="Save" />
        <TextButton text="Publish" />
      </div>
    </section>
  );
}
