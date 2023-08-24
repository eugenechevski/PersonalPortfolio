// Page for individual blog posts
"use client";

import parse, {
  type HTMLReactParserOptions,
  Element,
} from "html-react-parser";

import { useParams } from "next/navigation";

import {
  useDispatch,
  editPostAsync,
  selectPostsMap,
  useSelector,
} from "@/redux";

// Font awesome: share, comment, and like icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShare, faComment, faHeart } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";

const options: HTMLReactParserOptions = {
  replace: (domNode) => {
    // Add '?raw=true' to the end of image URLs
    // if it's not already there
    if (domNode instanceof Element && domNode.name === "img") {
      const src = domNode.attribs.src;
      if (!src.endsWith("?raw=true")) {
        domNode.attribs.src = src + "?raw=true";
      }
    }
  },
};

export default function PostPage() {
  const postId = useParams().post as string;

  const dispatch = useDispatch();
  const posts = useSelector(selectPostsMap);

  const post = posts[postId];
  
  // Obtain the current like state from the user's browser
  const likedPosts: {[key: string]: boolean} = JSON.parse(localStorage.getItem('likedPosts') || '{}');
  const [isLiked, setIsLiked] = useState(postId in likedPosts && likedPosts[postId] ? true : false);

  const handleShare = () => {
    // TODO
  };

  const handleComment = () => {
    // TODO
  };

  const handleLike = async () => {
    // Update the like state of the post in the database
    dispatch(
      editPostAsync({
        ...post,
        likes: post.likes + (isLiked ? -1 : 1),
      })
    );
    
    // Update the like state of the user in the browser
    likedPosts[postId] = !isLiked;
    localStorage.setItem('likedPosts', JSON.stringify(likedPosts));

    // Update the local state
    setIsLiked(!isLiked);
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative text-white mb-12 max-h-max overflow-scroll hide-scrollbar">
      {/** Title */}
      <h1 className="text-2xl sm:text-5xl font-bold text-center">
        {post?.title}
      </h1>

      {/** Author */}
      <h2 className="text-sm sm:text-xl italic text-center mt-12">
        by {post?.author}
      </h2>

      {/** Date */}
      <h3 className="text-sm sm:text-xl text-center mb-12">
        {new Date(post?.createdAt).toLocaleDateString()}
      </h3>

      {/** Content */}
      <div className="blog-content">{parse(post?.content || "", options)}</div>

      {/** Share, comment, and like buttons */}
      <div className="z-50 fixed flex flex-col right-3 sm:right-12 top-0 translate-y-[50vh] text-xl sm:text-2xl">
        {/** Share */}
        <button>
          <FontAwesomeIcon icon={faShare} />
        </button>

        {/** Comment */}
        <button>
          <FontAwesomeIcon icon={faComment} />
        </button>

        {/** Like */}
        <button onClick={handleLike}>
          <FontAwesomeIcon icon={faHeart} color={(isLiked && 'red') || ''} beat={isLiked}/>
        </button>
      </div>
    </div>
  );
}

