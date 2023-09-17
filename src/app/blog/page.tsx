"use client";

// Main page for the blog section
import PostWidget from "@/components/PostWidget";

// Redux imports for posts
import {
  selectPostsArray,
  useSelector,
} from "@/redux";

export default function BlogPage() {
  // Redux dispatch hook
  const posts = useSelector(selectPostsArray);

  return (
    <div className="w-full min-h-[90vh] flex flex-col justify-center items-center text-white">
      {/** Posts */}
      {posts.map((post) => (
        post.published && <PostWidget key={post._id} post={post} />
      ))}
    </div>
  );
}
