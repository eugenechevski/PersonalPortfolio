// Page for editing an existing post

"use client";

import Editor from "@/components/Editor";
import Button from "@/components/Button";
import Input from "@/components/Input";

import { useEffect, useState } from "react";

import { useDispatch, addPostAsync, selectUser, useSelector } from "@/redux";

import uniqid from "uniqid";

import { isValidImgUrl } from "@/lib/utils";

import { useRouter } from "next/navigation";

export default function Page() {
  // Routing and navigation hooks
  const router = useRouter();

  // Redux state hooks
  const dispatch = useDispatch();

  // User
  const user = useSelector(selectUser);

  // Determine if the current user has the permissions to create a post
  useEffect(() => {
    if (user.userName.length > 0 && !user.permissions.createPost) {
      router.push("/admin/posts");
    }
  }, [user, router]);

  // Local state
  const [title, setTitle] = useState("");
  const [formData, setFormData] = useState("");
  const [coverUrl, setCoverUrl] = useState("");
  const [action, setAction] = useState(null);

  /**
   * Saves the post as a draft
   */
  const saveAsDraft = () => {
    // The same logis as for publishing but with a different flag

    const newPost: IPost = {
      _id: uniqid(),
      title: title,
      content: formData,
      author: "Eugene Chevski", // Update for the user once the auth is implemented
      createdAt: Date.now(),
      updatedAt: Date.now(),
      published: false,
      imageURL: coverUrl,
      likes: 0,
    };

    dispatch(addPostAsync(newPost));
  };

  /**
   * Publishes the edited version of the post
   */
  const publishNewPost = () => {
    // Do validation

    const newPost: IPost = {
      _id: uniqid(),
      title: title,
      content: formData,
      author: "Eugene Chevski", // Update for the user once the auth is implemented
      createdAt: Date.now(),
      updatedAt: Date.now(),
      published: true,
      imageURL: coverUrl,
      likes: 0,
    };

    dispatch(addPostAsync(newPost));
  };

  const discardChanges = () => {
    // Discarding logic here
  };

  const confirmAction = () => {
    action();
    setAction(null);
    router.push("/admin/posts");
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
      <Input
        name="title"
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        minLength={5}
        maxLength={100}
      />

      {/** Cover image input */}
      <Input
        name="cover"
        placeholder="Cover URL"
        value={coverUrl}
        onChange={(e) => setCoverUrl(e.target.value)}
        maxLength={1000}
        customValidator={isValidImgUrl}
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
