import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faComment } from "@fortawesome/free-solid-svg-icons";

import Link from "next/link";

export default function CommentWidget(props: {
  comment: IComment;
}): JSX.Element {
  const { postId, commentId, authorName, content, createdAt, likes, replies } =
    props.comment;

  const elapsedDays = Math.floor(
    (Date.now() - createdAt) / (1000 * 60 * 60 * 24)
  );

  return (
    <div className="flex flex-col gap-5 w-full h-full">
      {/** Icon, name, and elapsed time */}
      <div className="flex gap-6">
        {/** Icon */}
        <div className="w-12 h-12 flex items-center justify-center purple-haze rounded-full drop-shadow-2xl text-xl font-bold border border-white-2">
            {authorName[0].toUpperCase()}
        </div>
        {/** Name and elapsed time */}
        <div className="flex flex-col gap-3">
          <h1 className="font-bold text-xl">{authorName}</h1>
          <h6>
            {elapsedDays == 0
              ? "Today"
              : elapsedDays == 1
              ? "Yesterday"
              : elapsedDays + " days ago"}
          </h6>
        </div>
      </div>

      {/** Comment content */}
      <div className="whitespace-normal max-w-full max-h-full break-all">{content}</div>

      {/** Likes, replies, and reply button */}
      <div className="flex">
        {/** Likes and replies*/}
        <div className="flex justify-center items-center gap-5">
          {/** Likes */}
          <div className="w-6 flex-col justify-center items-center gap-3">
            <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
            <span className="text-sm">{likes}</span>
          </div>
          {/** Replies */}
          <div className="w-6 flex-col justify-center items-center gap-3">
            <FontAwesomeIcon icon={faComment}></FontAwesomeIcon>
            <span className="text-sm">{replies.length}</span>
          </div>
        </div>
        {/** Reply button */}
        <div className="ml-auto">
          <Link href={`/blog/${postId}/comments/${commentId}`}>Reply</Link>
        </div>
      </div>
      
      {/** Solid line */}
      <div className="w-full h-1 bg-white"></div>
    </div>
  );
}
