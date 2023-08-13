// Page for editing an existing post

"use client";

import Editor from "@/components/Editor";
import Button from "@/components/Button";
import Input from "@/components/Input";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";

import {
  useDispatch,
  useSelector,
  selectPostsMap,
  editPostAsync
} from "@/redux";
import { isValidImgUrl } from "@/lib/utils";

export default function Page() {
  // Redux state hooks
  const dispatch = useDispatch();
  const postsMap = useSelector(selectPostsMap);

  // Routing and navigation hooks
  const postId = useParams().post as string;
  const router = useRouter();

  // Local state
  const [title, setTitle] = useState(postsMap[postId]?.title);
  const [formData, setFormData] = useState(postsMap[postId]?.content);
  const [coverUrl, setCoverUrl] = useState(postsMap[postId]?.imageURL);
  const [action, setAction] = useState(null);

  /**
   * Publishes the edited version of the post
   */
  const publishNewVersion = () => {
    // Do validation

    const newPost: IPost = {
      ...postsMap[postId],
      title: title,
      content: formData,
      updatedAt: Date.now(),
      imageURL: coverUrl,
    };

    dispatch(editPostAsync(newPost));
  };

  /**
   * Discards the changes made to the post
   */
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
              textContent="Publish"
              hanlderOnClick={askForConfirmation.bind(null, publishNewVersion)}
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
