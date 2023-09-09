declare interface IReply {
  _id: string;
  replies: string[]; // ids of replies
  repliedTo: string; // id of the reply that was replied to
  authorName: string;
  content: string;
  createdAt: number;
  likes: number;
}

declare interface IPost {
  _id: string;
  title: string;
  imageURL: string;
  content: string;
  author: string;
  likes: number;
  createdAt: number;
  updatedAt: number;
  published: boolean;
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