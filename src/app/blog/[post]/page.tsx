// Page for individual blog posts
"use client";

import parse, { type HTMLReactParserOptions, Element } from "html-react-parser";

import { useParams } from "next/navigation";

import {
  useDispatch,
  editPostAsync,
  selectPostsMap,
  useSelector,
} from "@/redux";

// Font awesome: share, comment, and like icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShare,
  faComment,
  faHeart,
  faClose,
  faCopy,
} from "@fortawesome/free-solid-svg-icons";

import { useEffect, useState } from "react";

// next-share: sharing buttons
import {
  RedditShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  RedditIcon,
  TwitterIcon,
  WhatsappIcon,
} from "next-share";

const options: HTMLReactParserOptions = {
  replace: (domNode) => {
    // Add '?raw=true' to the end of image URLs
    // if it's not already there
    if (domNode instanceof Element && domNode.name === "img") {
      const src = domNode.attribs.src;
      if (!src.endsWith("?raw=true")) {
        domNode.attribs.src = src + "?raw=true";
      }

      // Add the priority attribute to the image
      domNode.attribs.loading = "lazy";
    }
  },
};

export default function PostPage() {
  const shareMessage =
    "Found this cool blog post that's worth a read and share. Check it out! 📚😊 #BlogReads #SharingIsCaring";

  const postId = useParams().post as string;
  const postUrl = "https://eugenechevski.com/blog/" + postId;

  const dispatch = useDispatch();
  const posts = useSelector(selectPostsMap);

  // Obtain the post from the Redux store or make an API call
  const [post, setPost] = useState(posts[postId]);

  useEffect(() => {
    if (!post) {
      const fetchPost = async () => {
        const data = await fetch(`/api/posts?postId=${encodeURIComponent(postId)}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }).then((res) => res.json());

        setPost(data);
      }

      fetchPost().catch((err) => console.error(err));
    }

  }, [postId, post]);

  // Obtain the current like state from the user's browser
  const likedPosts: { [key: string]: boolean } = JSON.parse(
    localStorage?.getItem("likedPosts") || "{}"
  );
  const [isLiked, setIsLiked] = useState(
    postId in likedPosts && likedPosts[postId] ? true : false
  );

  const [isSharing, setIsSharing] = useState(false);

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
    localStorage?.setItem("likedPosts", JSON.stringify(likedPosts));

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
      <div
        className={
          "z-50 fixed flex flex-col top-0 translate-y-[50vh] text-xl sm:text-2xl transform transition-all duration-1000 " +
          (isSharing ? "-right-full" : "right-3 sm:right-12")
        }
      >
        {/** Share */}
        <button onClick={() => setIsSharing(true)}>
          <FontAwesomeIcon icon={faShare} />
        </button>

        {/** Comment */}
        <button>
          <FontAwesomeIcon icon={faComment} />
        </button>

        {/** Like */}
        <button onClick={handleLike}>
          <FontAwesomeIcon
            icon={faHeart}
            color={(isLiked && "red") || ""}
            beat={isLiked}
          />
        </button>
      </div>

      {/** Sharing overlay */}
      <div
        className={
          "z-50 fixed flex flex-col top-0 translate-y-[50vh] text-xl sm:text-2xl gap-3 bg-gray-500 rounded-md p-3 bg-opacity-[25%] transform transition-all duration-1000 " +
          (isSharing ? "right-3 sm:right-12" : "-right-full")
        }
      >
        {/** Reddit */}
        <RedditShareButton url={postUrl} title={shareMessage}>
          <RedditIcon size={32} round />
        </RedditShareButton>

        {/** Twitter */}
        <TwitterShareButton url={postUrl} title={shareMessage}>
          <TwitterIcon size={32} round />
        </TwitterShareButton>

        {/** Whatsapp */}
        <WhatsappShareButton url={postUrl} title={shareMessage}>
          <WhatsappIcon size={32} round />
        </WhatsappShareButton>

        {/** Copy link */}
        <button
          onClick={() => {
            navigator.clipboard.writeText(postUrl);
          }}
        >
          <FontAwesomeIcon icon={faCopy} />
        </button>

        {/** Close */}
        <button onClick={() => setIsSharing(false)}>
          <FontAwesomeIcon icon={faClose} />
        </button>
      </div>
    </div>
  );
}
