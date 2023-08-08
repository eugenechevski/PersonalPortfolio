declare interface IComment {
  postId: string,
  commentId: string,
  authorName: string,
  content: string,
  createdAt: number,
  likes: number,
  replies: Comment[]
}

declare interface IPost {
    postId: string,
    title: string,
    imageURL: string,
    content: string,
    author: string,
    tags: Tag[],
    likes: number,
    replies: Comment[],
    createdAt: number,
    updatedAt: number,
    published: boolean
}

declare interface Tag {
    posts: IPost[]
}


