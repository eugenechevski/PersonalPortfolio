import Image from "next/image";
import Link from "next/link";

export default function PostWidget(props: { post: IPost }): JSX.Element {
  const {
    _id: postId,
    title,
    imageURL,
    likes,
    createdAt,
    replies,
  } = props.post;

  const creationDate = new Date(createdAt);

  return (
    <div className="flex justify-evenly items-center h-full w-full p-5">
      {/** Blog info */}
      <div className="flex flex-col gap-3 items-start w-full sm:w-1/3">
        {/** Title */}
        <Link href={`/blog/${postId}`} className="w-full">
          <h1 className="font-bold text-lg lg:text-xl overflow-hidden whitespace-nowrap text-ellipsis">{title}</h1>
        </Link>

        <div className="flex gap-5">
          {/** Likes */}
          <div>{likes} likes</div>

          {/** Replies */}
          <div>{Object.keys(replies).length} comments</div>

          {/** Date of creation */}
          <div className="ml-12 lg:ml-auto">
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
      {innerWidth > 576 ? (
        <Image
          src={
            imageURL.endsWith("?raw=true") ? imageURL : imageURL + "?raw=true"
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
