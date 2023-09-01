"use client";

// Page for a single blog post's replies
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

  // Get the post's replies
  const replies = postsMap[post as string]?.replies;

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
          <ReplyWidget comment={reply} key={reply._id} />
        ))}
      </div>

      {/** Reply button */}
      <Link href={`/blog/${post}/replies/new`}>
        <Button textContent="Reply" />
      </Link>
    </div>
  );
}
