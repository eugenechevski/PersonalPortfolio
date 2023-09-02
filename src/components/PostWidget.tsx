import Image from "next/image";
import Link from "next/link";

export default function PostWidget(props: { post: IPost, replies?: number }): JSX.Element {
  const {
    _id: postId,
    title,
    imageURL,
    likes,
    createdAt,
  } = props.post;
  const { replies } = props;

  const creationDate = new Date(createdAt);

  return (
    <div className="flex justify-evenly items-center h-full w-full p-5">
      {/** Blog info */}
      <div className="flex flex-col gap-3">
        {/** Title */}
        <Link href={`/blog/${postId}`}>
          <h1 className="font-bold text-xl">{title}</h1>
        </Link>

        <div className="flex gap-5">
          <div className="flex gap-3">
            {/** Likes */}
            <div>{likes} likes</div>
            <div>{replies ? replies : 0} comments</div>
          </div>

          {/** Date of creation */}
          <div className="ml-auto">
            {creationDate.getMonth() +
              1 +
              "/" +
              creationDate.getDate() +
              "/" +
              creationDate.getFullYear()}
          </div>
        </div>
      </div>

      {/** Blog image */}
      <div className="relative w-1/3 h-1/3 md:w-1/4 md:h-1/2">
        <Image
          src={
            imageURL.endsWith("?raw=true") ? imageURL : imageURL + "?raw=true"
          }
          alt={"post thumbnail"}
          fill
        ></Image>
      </div>
    </div>
  );
}
