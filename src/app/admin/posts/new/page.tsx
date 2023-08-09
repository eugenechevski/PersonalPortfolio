// Page for editing an existing post

"use client";

import Editor from "@/components/Editor";
import TextButton from "@/components/TextButton";
import { useState} from "react";

export default function Page() {
  const [title, setTitle] = useState("");
  const [formData, setFormData] = useState({ description: "" });
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
    // TODO
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

      {/** Cover file picker */}
      <div className="flex flex-col text-white w-1/3 gap-5 justify-center items-center">
        <label htmlFor="cover" className="">
          Choose cover:
        </label>
        <input
          type="file"
          name="cover"
          accept="image/jpeg, image/jpg image/png"
          className="text-center"
        />
      </div>

      {/** Editor */}
      <Editor formData={formData} setFormData={setFormData} />

      {/** Confirmation dialog */}
      {action ? (
        <div className="w-1/3 h-1/6 flex flex-col justify-center items-center text-white gap-5 p-4 rounded-lg">
          <p className="mt-6">Are you sure you want to continue?</p>
          <div className="flex gap-5">
            <TextButton text="Yes" hanlderOnClick={confirmAction} />
            <TextButton text="No" hanlderOnClick={cancelAction} />
          </div>
        </div>
      ) : (
        <>
          {/** Buttons */}
          <div className="flex gap-5">
            <TextButton
              text="Save"
              hanlderOnClick={askForConfirmation.bind(null, saveAsDraft)}
            />
            <TextButton
              text="Publish"
              hanlderOnClick={askForConfirmation.bind(null, publishNewPost)}
            />
            <TextButton
              text="Discard"
              hanlderOnClick={askForConfirmation.bind(null, discardChanges)}
            />
          </div>
        </>
      )}
    </section>
  );
}
