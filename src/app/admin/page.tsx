"use client";

import PostWidget from "@/components/PostWidget";

import { selectPostsArray, useSelector } from "@/redux";
import { useEffect, useState } from "react";

export default function Page() {
  // Get posts from redux store
  const posts = useSelector(selectPostsArray);

  const [latestPost, setLatestPost] = useState<IPost | null>(null);

  // Get latest post
  useEffect(() => {
    const latest = posts.reduce((latestPost, post) => {
      if (!latestPost || post.createdAt > latestPost.createdAt) {
        return post;
      }
      return latestPost;
    }, null);
    setLatestPost(latest);
  }, [posts]);

  return (
    <section className="h-[90vh] w-full flex flex-col text-white items-center justify-center">
      {/** Latest post */}
      <div className="flex flex-col justify-start items-center h-1/2 w-full">
        <h1 className="font-bold text-5xl h-1/6">Latest Post</h1>
        <PostWidget post={latestPost} />
      </div>
    </section>
  );
}
