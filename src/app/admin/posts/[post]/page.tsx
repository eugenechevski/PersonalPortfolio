// Page for editing an existing post

"use client";

import Editor from "@/components/Editor";
import TextButton from "@/components/TextButton";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";

export default function Page() {
  const { post } = useParams();

  const [title, setTitle] = useState("");
  const [formData, setFormData] = useState("");

  // obtain the post data
  useEffect(() => {}, []);

  /**
   * Saves the edited version of the post as a draft
   * However, it keeps the old version published
   */
  const saveAsDraft = () => {
    // TODO
  };

  /**
   * Publishes the edited version of the post
   */
  const publishNewVersion = () => {
    // TODO
  };

  return (
    <section className="h-full w-full flex flex-col justify-center items-center gap-5">
      {/** Title */}
      <input
        type="text"
        placeholder="Title"
        className="w-1/3 p-3 text-2xl rounded-3xl shadow-2xl drop-shadow-2xl text-[#6B21A5] hover:opacity-[35%] outline-none"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      {/** Cover file picker */}
      <div className="flex flex-col text-white w-1/3 gap-5 justify-center items-center">
        <label htmlFor="cover" className="">Choose cover:</label>
        <input type="file" name="cover" accept="image/jpeg, image/jpg image/png" className="text-center" />
      </div>

      {/** Editor */}
      <Editor formData={formData} setFormData={setFormData} />

      {/** Buttons */}
      <div className="flex gap-5">
        <TextButton text="Save" hanlderOnClick={saveAsDraft} />
        <TextButton text="Publish" hanlderOnClick={publishNewVersion} />
      </div>
    </section>
  );
}
