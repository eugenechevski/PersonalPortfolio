"use client";

// Main page for the blog section
import PostWidget from "@/components/PostWidget";

// Redux imports for posts
import {
  selectPostsArray,
  getPostsAsync,
  useDispatch,
  useSelector,
} from "@/redux";
import { useEffect } from "react";

export default function BlogPage() {
  // Redux dispatch hook
  const dispatch = useDispatch();
  const posts = useSelector(selectPostsArray);

  // Load posts
  useEffect(() => {
    dispatch(getPostsAsync());
  }, [dispatch]);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center text-white">
      {/** Posts */}
      {posts.map((post) => (
        post.published && <PostWidget key={post._id} post={post} />
      ))}
    </div>
  );
}
