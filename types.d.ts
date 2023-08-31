declare interface IReply {
  _id: string;
  postId: string;
  authorName: string;
  content: string;
  createdAt: number;
  likes: number;
  replies: IReply[];
}

declare interface IPost {
  _id: string;
  title: string;
  imageURL: string;
  content: string;
  author: string;
  tags: Tag[];
  likes: number;
  replies: IReply[];
  createdAt: number;
  updatedAt: number;
  published: boolean;
}

declare interface Tag {
  posts: IPost[];
}

declare interface AdminUser {
  _id: string;
  userName: string;
  email: string;
  password: string;
  articlesPublished: number;
  createdAt: number;
  updatedAt: number;
  permissions: {
    createPost: boolean;
    deletePost: boolean;
    editPost: boolean;
    createUser: boolean;
    deleteUser: boolean;
    editUser: boolean;
  }
}