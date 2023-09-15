"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

import { useState } from "react";

import {
  useDispatch,
  useSelector,
  selectPostsMap,
  editPostAsync,
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
  const { post: postId } = useParams();

  // Redux stuff
  const dispatch = useDispatch();

  // Load the post map from the state
  const postsMap = useSelector(selectPostsMap);

  // Get the post
  const post = postsMap[postId as string];

  // Get the post's name
  const postTitle = post?.title;

  // Get the replies
  const replies = (post && Object.values(post?.replies)) || [];

  // Get local storage of map of replies that have been liked
  const likedReplies: { [key: string]: boolean } = JSON.parse(
    localStorage?.getItem("likedReplies") || "{}"
  );

  const [isReplyFormOpen, setIsReplyFormOpen] = useState(false);
  const [userName, setUserName] = useState("");
  const [newReplyContent, setNewReplyContent] = useState("");

  const closeForm = () => {
    setIsReplyFormOpen(false);
    setUserName("");
    setNewReplyContent("");
  };

  const createReply = async () => {
    console.log(userName, newReplyContent);
    // Send the reply to the database

    const newReplyId = randomHex(24);

    dispatch(
      editPostAsync({
        ...post,
        replies: {
          ...post?.replies,
          [newReplyId]: {
            _id: newReplyId,
            authorName: userName,
            repliedTo: post,
            content: newReplyContent,
            createdAt: Date.now(),
            likes: 0,
          },
        },
      })
    );

    closeForm();
  };

  const handleLikeReply = (replyId: string) => {
    // Send the like to the database

    // Determine if the reply has already been liked
    likedReplies[replyId] =
      likedReplies[replyId] !== undefined ? !likedReplies[replyId] : true;
    let likeChange = likedReplies[replyId] ? 1 : -1;

    // Update the local storage
    localStorage?.setItem("likedReplies", JSON.stringify(likedReplies));

    // Update the post in the database
    dispatch(
      editPostAsync({
        ...post,
        replies: {
          ...post?.replies,
          [replyId]: {
            ...post?.replies[replyId],
            likes: post?.replies[replyId].likes + likeChange,
          },
        },
      })
    );
  };

  return (
    <div className="flex flex-col w-full h-full text-white items-center justify-center">
      {/** Navigation back to the post */}
      <Link
        href={`/blog/${postId}`}
        className="flex gap-3 items-center justify-center"
      >
        <FontAwesomeIcon icon={faArrowLeft} />
        <span>{postTitle}</span>
      </Link>

      {/** replies */}
      <div className="flex flex-col gap-5 mt-5 min-h-[75%] items-center justify-center">
        {replies && replies.length > 0 ? (
          replies.map((reply) => (
            <ReplyWidget
              reply={reply}
              handleLike={handleLikeReply}
              isLiked={
                likedReplies[reply._id] !== undefined
                  ? likedReplies[reply._id]
                  : false
              }
              key={reply._id}
            />
          ))
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
          className="w- absolute right-36 top-0 border rounded-xl w-6 h-6 flex items-center justify-center"
        >
          <FontAwesomeIcon icon={faClose} />
        </button>
        
        {/** Username input */}
        <Input
          required
          className="w-96"
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
          classes="w-96"
          placeholder="Type your reply here..."
          minLength={30}
          maxLength={200}
          id="reply"
          rows={10}
          cols={50}
          name="reply"
          onChange={(e) => setNewReplyContent(e.target.value)}
          value={newReplyContent}
        />

        {/** Submit button */}
        <Button textContent="Reply" hanlderOnClick={() => createReply()} />
      </div>
    </div>
  );
}
