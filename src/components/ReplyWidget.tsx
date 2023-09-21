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
    <div className="flex flex-col gap-5 w-full h-full p-3">
      {/** Icon, name, and elapsed time */}
      <div className="flex gap-6">
        {/** Icon */}
        <div className="w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center purple-haze rounded-full drop-shadow-2xl text-xl font-bold border border-white-2">
          {authorName[0].toUpperCase()}
        </div>
        {/** Name and elapsed time */}
        <div className="flex flex-col gap-3">
          <h1 className="font-bold text-md sm:text-xl">{authorName}</h1>
          <h6 className="text-sm sm:text-lg">
            {elapsedDays == 0
              ? "Today"
              : elapsedDays == 1
              ? "Yesterday"
              : elapsedDays + " days ago"}
          </h6>
        </div>
      </div>

      {/** Reply content */}
      <div className="text-sm sm:text-lg whitespace-normal text-justify w-full h-full max-h-full max-w-full hide-scrollbar break-all overflow-auto">
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
            size={innerWidth < 768 ? "lg" : "2xl"}
          ></FontAwesomeIcon>
          <span className="text-sm sm:text-lg">{likes}</span>
        </button>
      )}

      {/** Solid line */}
      <div className="w-full h-1 bg-white"></div>
    </div>
  );
}
