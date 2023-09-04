// Page for a blog post's replies
// The page could rendered the first level of replies
// or n-th level of replies, even at the same url level
// as long as the reference to the parent reply is present
// the new level of replies can be requested from the database

"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

import { useEffect, useState } from "react";

import {
  useDispatch,
  useSelector,
  selectPostsMap,
  selectReplies,
  getRepliesAsync,
  editReplyAsync,
  addReplyAsync,
} from "@/redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faClose } from "@fortawesome/free-solid-svg-icons";

import ReplyWidget from "@/components/ReplyWidget";

import Button from "@/components/Button";
import Input from "@/components/Input";
import TextArea from "@/components/TextArea";
import { randomHex } from "@/lib/utils";

export default function RepliesPage() {
  // Get the post id from the URL
  const { post } = useParams();

  // Redux stuff
  const dispatch = useDispatch();

  // Get the replies from the database
  useEffect(() => {
    dispatch(getRepliesAsync(post as string));
  }, [dispatch, post]);

  // Load the post from the state
  const postsMap = useSelector(selectPostsMap);

  // Get the post's name
  const postName = postsMap[post as string]?.title;

  // Get the replies
  const replies = useSelector(selectReplies);

  const [isReplyFormOpen, setIsReplyFormOpen] = useState(false);
  const [userName, setUserName] = useState("");
  const [reply, setReply] = useState("");

  const closeForm = () => {
    setIsReplyFormOpen(false);
    setUserName("");
    setReply("");
  };

  const createReply = async () => {
    console.log(userName, reply);
    // Send the reply to the database

    dispatch(
      addReplyAsync({
        _id: randomHex(24),
        replies: [],
        repliedTo: post as string,
        authorName: userName,
        content: reply,
        createdAt: Date.now(),
        likes: 0,
      })
    );

    closeForm();
  };

  return (
    <div className="flex flex-col w-full h-full text-white items-center justify-center">
      {/** Navigation back to the post */}
      <Link
        href={`/blog/${post}`}
        className="flex gap-3 items-center justify-center"
      >
        <FontAwesomeIcon icon={faArrowLeft} />
        <span>{postName}</span>
      </Link>

      {/** replies */}
      <div className="flex flex-col gap-5 mt-5 min-h-[75%] items-center justify-center">
        {replies && replies.length > 0 ? (
          replies.map((reply) => <ReplyWidget reply={reply} key={reply._id} />)
        ) : (
          <span className="text-center font-bold text-xl">No replies yet</span>
        )}
      </div>

      {/** Create reply button */}
      <Button
        textContent="Create reply"
        hanlderOnClick={() => setIsReplyFormOpen((prev) => !prev)}
        className={isReplyFormOpen ? "hidden" : "block"}
      />

      {/** Reply form */}
      <div
        className={
          "flex flex-col justify-center items-center gap-3 w-1/2 relative " +
          (isReplyFormOpen ? "block" : "hidden")
        }
      >
        {/** Close button */}
        <button
          onClick={() => closeForm()}
          className="absolute right-36 top-0 border rounded-xl w-6 h-6 flex items-center justify-center"
        >
          <FontAwesomeIcon icon={faClose} />
        </button>

        {/** Username input */}
        <Input
          required
          placeholder="Username"
          name="name"
          maxLength={50}
          size="lg"
          onChange={(e) => setUserName(e.target.value)}
          value={userName}
        />

        {/** Reply input */}
        <TextArea
          required
          placeholder="Reply"
          minLength={30}
          maxLength={200}
          id="reply"
          rows={10}
          cols={50}
          name="reply"
          onChange={(e) => setReply(e.target.value)}
          value={reply}
        />

        {/** Submit button */}
        <Button textContent="Reply" hanlderOnClick={() => createReply()} />
      </div>
    </div>
  );
}
