import CommentWidget from "@/components/CommentWidget";
import PostWidget from "@/components/PostWidget";
import uniqid from 'uniqid';

const postData: IPost = {
  _id: uniqid(),
  title: 'How to Create an Awesome Blog',
  imageURL: 'https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/Zugpsitze_mountain.jpg?crop=0%2C214%2C3008%2C1579&wid=1200&hei=630&scl=2.506666666666667',
  content: 'asdsad',
  author: 'asda',
  tags: [],
  likes: 100,
  replies: [],
  createdAt: Date.now(),
  updatedAt: Date.now(),
  published: true
};

const commentData: IComment = {
  postId: uniqid(),
  commentId: uniqid(),
  authorName: 'Suvashi Poblano',
  content: 'I\'ve got the insightasdsaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasddddddddddddddddddddddddddddddddddd asdasdas asdasd adsdasd asd ad asd asdasd asd asdasdadasd asd asd asd asd assd ad asd asd asd asd as dasd sadddddddaaaaaaaaaaaaaaaa!',
  createdAt: Date.now(),
  likes: 100,
  replies: []
};

export default function Page() {
    return (
        <section className="h-full w-full flex flex-col text-white items-center justify-center">
            {/** Latest post */}
            <div className="flex flex-col justify-start items-center h-1/2 w-full">
                <h1 className="font-bold text-5xl h-1/6">Latest Post</h1>
                <PostWidget post={postData}/>
            </div>

            {/** Latest comment */}
            <div className="flex flex-col justify-center items-center w-3/4 h-1/2 gap-12">
                <h1 className="font-bold text-5xl h-1/6">Latest Comment</h1>
                <div className="w-1/2 h-full">
                    <CommentWidget comment={commentData}/>
                </div>
            </div>
        </section>
    );
}