// Page for a blog post's replies
// The page could rendered the first level of replies
// or n-th level of replies, even at the same url level
// as long as the reference to the parent reply is present
// the new level of replies can be requested from the database


"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

import { useSelector, selectPostsMap } from "@/redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import ReplyWidget from "@/components/ReplyWidget";

import Button from "@/components/Button";

export default function RepliesPage() {
  // Get the post id from the URL
  const { post } = useParams();

  // Load the post from the state
  const postsMap = useSelector(selectPostsMap);

  // Get the post's name
  const postName = postsMap[post as string]?.title;

  // Get the replies
  const replies = [];

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
      <div className="flex flex-col gap-5 mt-5 min-h-[75%]">
        {replies?.map((reply) => (
          <ReplyWidget reply={reply} key={reply._id} />
        ))}
      </div>

      {/** Reply button */}
      <Link href={`/blog/${post}/replies/new`}>
        <Button textContent="Reply" />
      </Link>
    </div>
  );
}
