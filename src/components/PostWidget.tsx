"use client";

import NextImage from "next/image";
import Link from "next/link";

import fallBackImg from "@/assets/fallback.jpg";

import { useEffect, useState } from "react";

export default function PostWidget(props: { post: IPost }): JSX.Element {
  const [post, setPost] = useState<IPost | undefined>(props.post);
  const [coverImg, setCoverImage] = useState(
    <NextImage
      src={fallBackImg}
      alt={"post thumbnail"}
      width={200}
      height={200}
      sizes="200px"
    />
  );
  const [innerWidth, setInnerWidth] = useState<number | undefined>(undefined);

  // Post is loaded
  useEffect(() => {
    setPost(props.post);
    
    // Determine if the image url can be loaded
    // if not, use fallback image
    if (props?.post?.imageURL) {
      // ?raw=true is a hack to get the image to load if it's not present
      let imageUrl = props.post.imageURL;
      imageUrl = !imageUrl.endsWith("?raw=true") ? imageUrl + "?raw=true" : imageUrl;

      // Load the image
      const img = new Image();
      img.src = imageUrl;

      // Image is loaded
      img.onload = () => {
        setCoverImage(
          <NextImage
            src={imageUrl}
            alt={"post thumbnail"}
            width={200}
            height={200}
            sizes="200px"
          />
        );
      };
    }

  }, [props.post]);

  useEffect(() => {
    setInnerWidth(window.innerWidth);
  }, []);

  const creationDate = new Date(post?.createdAt);

  return (
    <div className="flex justify-evenly items-center h-full w-full p-5">
      {/** Blog info */}
      <div className="flex flex-col gap-3 items-start w-full sm:w-1/3">
        {/** Title */}
        <Link href={`/blog/${post?._id || ""}`} className="w-full">
          <h1 className="font-bold text-lg lg:text-xl text-overflow-ellipsis">
            {post?.title}
          </h1>
        </Link>

        <div className="flex gap-5">
          {/** Likes */}
          <div>{post?.likes || 0} likes</div>

          {/** Replies */}
          <div>
            {post?.replies ? Object.keys(post?.replies).length : 0} comments
          </div>

          {/** Date of creation */}
          <div className="ml-12 lg:ml-auto">
            {creationDate?.getMonth() +
              1 +
              "/" +
              creationDate?.getDate() +
              "/" +
              creationDate?.getFullYear()}
          </div>
        </div>
      </div>

      {/** Blog image */}
      {innerWidth !== undefined && innerWidth > 576 ? <>{coverImg}</> : <></>}
    </div>
  );
}
