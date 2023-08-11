// Page for editing an existing post

"use client";

import Editor from "@/components/Editor";
import Button from "@/components/Button";
import Input from "@/components/Input";

import { useState } from "react";

import { useDispatch, addPostAsync } from "@/redux";

import uniqid from "uniqid";

export default function Page() {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [formData, setFormData] = useState({ description: "" });
  const [coverUrl, setCoverUrl] = useState("");
  const [action, setAction] = useState(null);

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
  const publishNewPost = () => {
    // Do validation

    const newPost: IPost = {
      _id: uniqid(),
      title: title,
      content: formData.description,
      author: "Eugene Chevski",
      createdAt: Date.now(),
      updatedAt: Date.now(),
      published: true,
      imageURL: coverUrl,
      tags: [],
      likes: 0,
      replies: [],
    };

    dispatch(addPostAsync(newPost));
  };

  const discardChanges = () => {};

  const confirmAction = () => {
    action();
    setAction(null);
  };

  const cancelAction = () => {
    setAction(null);
  };

  /**
   * Users must confirm their action before proceeding
   * Ask for confirmation -> set the action to be executed -> confirm the action -> execute the action
   *                                                       -> cancel the action -> discard the action
   */
  const askForConfirmation = (newAction: () => void) => {
    setAction(() => newAction);
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

      {/** Cover image input */}
      <Input
        name="cover"
        placeholder="Cover URL"
        value={coverUrl}
        onChange={(e) => setCoverUrl(e.target.value)}
        maxLength={1000}
      />

      {/** Editor */}
      <Editor formData={formData} setFormData={setFormData} />

      {/** Confirmation dialog */}
      {action ? (
        <div className="w-1/3 h-1/6 flex flex-col justify-center items-center text-white gap-5 p-4 rounded-lg">
          <p className="mt-6">Are you sure you want to continue?</p>
          <div className="flex gap-5">
            <Button textContent="Yes" hanlderOnClick={confirmAction} />
            <Button textContent="No" hanlderOnClick={cancelAction} />
          </div>
        </div>
      ) : (
        <>
          {/** Buttons */}
          <div className="flex gap-5">
            <Button
              textContent="Save"
              hanlderOnClick={askForConfirmation.bind(null, saveAsDraft)}
            />
            <Button
              textContent="Publish"
              hanlderOnClick={askForConfirmation.bind(null, publishNewPost)}
            />
            <Button
              textContent="Discard"
              hanlderOnClick={askForConfirmation.bind(null, discardChanges)}
            />
          </div>
        </>
      )}
    </section>
  );
}
