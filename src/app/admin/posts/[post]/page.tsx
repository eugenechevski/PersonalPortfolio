// Page for editing an existing post

"use client";

import Editor from "@/components/Editor";
import Button from "@/components/Button";
import Input from "@/components/Input";
import ReplyWidget from "@/components/ReplyWidget";

import { useEffect, useState } from "react";
import { useParams, useRouter as useNavRouter } from "next/navigation";

import {
  useDispatch,
  useSelector,
  selectPostsMap,
  editPostAsync,
  selectUser,
  getPostsAsync,
} from "@/redux";
import { isValidImgUrl } from "@/lib/utils";

export default function Page() {
  // Local state

  // Redux state hooks
  const dispatch = useDispatch();
  const postsMap = useSelector(selectPostsMap);

  // Routing and navigation hooks
  const postId = useParams().post as string;
  const navRouter = useNavRouter();

  // User
  const user = useSelector(selectUser);

  // Post object
  const [post, setPost] = useState(postsMap[postId]);

  // Table of marked replies for deletion
  const [markedReplies, setMarkedReplies] = useState(new Set<IReply>());

  // Form data
  const [title, setTitle] = useState(postsMap[postId]?.title);
  const [formData, setFormData] = useState(postsMap[postId]?.content);
  const [coverUrl, setCoverUrl] = useState(postsMap[postId]?.imageURL);

  // Confirmation dialog action
  const [action, setAction] = useState(null);

  // Saved state tracker
  const [isSaved, setIsSaved] = useState(true);

  // Effect hooks

  // Set the data if the page was reloaded
  useEffect(() => {
    if (Object.keys(postsMap).length === 0) {
      dispatch(getPostsAsync());
    } else {
      setTitle(postsMap[postId]?.title);
      setFormData(postsMap[postId]?.content);
      setCoverUrl(postsMap[postId]?.imageURL);
    }
  }, [dispatch, postsMap, postId]);

  // Determine if the current user has the permissions to edit a post
  useEffect(() => {
    if (user.userName.length > 0 && !user.permissions.editPost) {
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
  // except the initial render or when the data is the same as the original
  useEffect(() => {
    // Skip the initial render or when the data is the same as the original
    if (
      title === post?.title &&
      coverUrl === post?.imageURL &&
      formData === post?.content
    )
      return;

    if (title?.length > 0 || coverUrl?.length > 0 || formData?.length > 0) {
      setIsSaved(false);
    }
  }, [title, coverUrl, formData, post]);

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

  // Actions

  /**
   * Publishes the edited version of the post
   */
  const publishNewVersion = () => {
    const newPost: IPost = {
      ...postsMap[postId],
      title: title,
      content: formData,
      updatedAt: Date.now(),
      imageURL: coverUrl,
      // TODO: test
      replies: { // Include only the replies that are not marked for deletion 
        ...Object.fromEntries(
          Object.entries(postsMap[postId]?.replies).filter(
            ([_, reply]) => !markedReplies.has(reply)
          )
        ),
      }
    };

    markedReplies.clear();
    dispatch(editPostAsync(newPost));
    setIsSaved(true);
    alert("Updated the post.");
    navRouter.push("/admin/posts");
  };

  /**
   * Discards the changes made to the post
   */
  const discardChanges = () => {
    // Restore the original data
    setTitle(postsMap[postId]?.title);
    setFormData(postsMap[postId]?.content);
    setCoverUrl(postsMap[postId]?.imageURL);
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

  /**
   * Toggle the marked replies
   */
  const toggleMarkedReplies = (reply: IReply) => {
    if (markedReplies.has(reply)) {
      markedReplies.delete(reply);
    } else {
      markedReplies.add(reply);
    }

    setMarkedReplies(new Set(markedReplies));
  };

  return (
    <section className="flex flex-col justify-center items-center gap-5">
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
      <div className="w-1/2 h-[60vh]">
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

      {/** Replies of the post */}
      <div className="w-1/2 h-full text-white flex flex-col justify-center items-center gap-5">
        <h1 className="text-2xl font-bold">Replies</h1>
        <div className="w-full h-full flex flex-col justify-center items-center gap-5">
          {post &&
            Object.values(post.replies).map((reply) => (
              <div key={reply._id} className="relative w-full h-full">
                <ReplyWidget key={reply._id} reply={reply} />

                {/** Marker for deletion */}
                <div className="flex gap-3 absolute top-3 right-3 z-50">
                  <label htmlFor="markToDelete">Mark for Deletion</label>
                  <input
                    type="checkbox"
                    name="markToDelete"
                    onChange={toggleMarkedReplies.bind(this, reply)}
                  />
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
