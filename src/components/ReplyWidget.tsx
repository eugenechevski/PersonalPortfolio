import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function ReplyWidget(props: {
  reply: IReply;
  handleLike?: (replyId: string) => void;
  isLiked?: boolean;
}): JSX.Element {
  const { _id, authorName, content, createdAt, likes } = props.reply;
  const { handleLike, isLiked } = props;

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

      {/** Reply content */}
      <div className="whitespace-normal max-w-full max-h-full break-all">
        {content}
      </div>

      {/** Likes */}
      {handleLike && (
        <button
          className="w-6 flex-col justify-center items-center gap-3"
          onClick={handleLike.bind(this, _id)}
        >
          <FontAwesomeIcon
            icon={faHeart}
            color={(isLiked && "red") || ""}
            beat={isLiked}
          ></FontAwesomeIcon>
          <span className="text-sm">{likes}</span>
        </button>
      )}

      {/** Solid line */}
      <div className="w-full h-1 bg-white"></div>
    </div>
  );
}
