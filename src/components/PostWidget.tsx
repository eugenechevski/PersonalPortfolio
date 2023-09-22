'use client';

import Image from "next/image";
import Link from "next/link";

import { useEffect, useState } from "react";

export default function PostWidget(props: { post: IPost }): JSX.Element {
  const post = props.post;

  const [innerWidth, setInnerWidth] = useState<number | undefined>(undefined);

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
          <h1 className="font-bold text-lg lg:text-xl overflow-hidden whitespace-nowrap text-ellipsis">
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
      {innerWidth !== undefined && innerWidth > 576 ? (
        <Image
          src={
            post?.imageURL
              ? post?.imageURL.endsWith("?raw=true")
                ? post?.imageURL
                : post?.imageURL + "?raw=true"
              : ""
          }
          alt={"post thumbnail"}
          width={200}
          height={100}
          sizes="200px"
        ></Image>
      ) : (
        <></>
      )}
    </div>
  );
}
