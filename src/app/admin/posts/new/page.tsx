// Page for creating a new post

"use client";

import Editor from "@/components/Editor";
import Button from "@/components/Button";
import Input from "@/components/Input";

import { useRouter as useNavRouter } from "next/navigation";

import { useEffect, useState } from "react";

import { useDispatch, addPostAsync, selectUser, useSelector } from "@/redux";

import { randomHex } from "@/lib/utils";
import { isValidImgUrl } from "@/lib/utils";

export default function Page() {
  // Local state

  // Routing and navigation hooks
  const navRouter = useNavRouter();

  // Redux state hooks
  const dispatch = useDispatch();

  // User
  const user = useSelector(selectUser);

  // Form data
  const [title, setTitle] = useState("");
  const [formData, setFormData] = useState("");
  const [coverUrl, setCoverUrl] = useState("");

  // Confirmation dialog action
  const [action, setAction] = useState(null);

  // Saved state tracker
  const [isSaved, setIsSaved] = useState(true);

  // Effect hooks

  // Determine if the current user has the permissions to create a post
  useEffect(() => {
    if (user?.userName.length > 0 && !user?.permissions.createPost) {
      navRouter.push("/admin/posts");
    }
  }, [user, navRouter]);

  // The event for leaving the page
  useEffect(() => {
    // Handler for the 'beforeunload' event
    const handleUnload = (e: BeforeUnloadEvent) => {
      if (isSaved) return;

      // Prevent the default behavior
      e.preventDefault();

      // Chrome requires returnValue to be set
      e.returnValue = "";

      // Show the alert
      alert("You have unsaved changes.");

      // Ask for confirmation
      return "";
    };

    // Add the event listener
    window.addEventListener("beforeunload", handleUnload);

    // Remove the event listener
    return () => {
      window.removeEventListener("beforeunload", handleUnload);
    };
  }, [isSaved, navRouter]);

  // update saved state whenever the title, cover image or content changes
  useEffect(() => {
    if (title?.length > 0 || coverUrl?.length > 0 || formData?.length > 0) {
      setIsSaved(false);
    }
  }, [title, coverUrl, formData]);

  // Actions

  /**
   * Validation logic
   */
  const isValidForm = () => {
    // Validate the title
    if (title?.length < 5 || title?.length > 100) {
      alert("Title must be between 5 and 100 characters.");
      return false;
    }

    // Validate the cover image URL
    if (!isValidImgUrl(coverUrl)) {
      alert("Invalid cover image URL.");
      return false;
    }

    // Validate the content
    if (formData?.length < 5) {
      alert("The content must be at least 5 characters long.");
      return false;
    }

    return true;
  };

  /**
   * Saves the post as a draft
   */
  const saveAsDraft = () => {
    // The same logic as for publishing but with a different flag
    const newPost: IPost = {
      _id: randomHex(24),
      title: title,
      content: formData,
      author: user?.userName,
      createdAt: Date.now(),
      updatedAt: Date.now(),
      published: false,
      imageURL: coverUrl,
      likes: 0,
      replies: {},
    };

    dispatch(addPostAsync(newPost));
    setIsSaved(true);
    alert("Saved as a draft.");
    navRouter.push("/admin/posts");
  };

  /**
   * Publishes the edited version of the post
   */
  const publishNewPost = () => {
    const newPost: IPost = {
      _id: randomHex(24),
      title: title,
      content: formData,
      author: user?.userName,
      createdAt: Date.now(),
      updatedAt: Date.now(),
      published: true,
      imageURL: coverUrl,
      likes: 0,
      replies: {},
    };

    dispatch(addPostAsync(newPost));
    setIsSaved(true);
    alert("Published.");
    navRouter.push("/admin/posts");
  };

  const discardChanges = () => {
    // Remove all the data
    setTitle("");
    setCoverUrl("");
    setFormData("");
    setIsSaved(true);
  };

  const confirmAction = () => {
    if (!isValidForm()) return;
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

      <div className="w-1/2 h-[60vh]">
        {/** Editor */}
        <Editor formData={formData} setFormData={setFormData} />
      </div>

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
