/**
 * Reply interface for the replies in the post.
 * 
 * @interface IReply
 * @property {string} _id - The id of the reply
 * @property {IPost} repliedTo - The post that the reply is replying to
 * @property {string} authorName - The name of the author of the reply
 * @property {string} content - The content of the reply
 * @property {number} createdAt - The time the reply was created
 * @property {number} likes - The number of likes the reply has
 */
declare interface IReply {
  _id: string;
  repliedTo: IPost;
  authorName: string;
  content: string;
  createdAt: number;
  likes: number;
}

/**
 * Post interface for the posts in the blog.
 * 
 * @interface IPost
 * @property {string} _id - The id of the post
 * @property {string} title - The title of the post
 * @property {string} imageURL - The URL of the image for the post
 * @property {string} content - The content of the post
 * @property {string} author - The author of the post
 * @property {number} likes - The number of likes the post has
 * @property {number} createdAt - The time the post was created
 * @property {number} updatedAt - The time the post was last updated
 * @property {boolean} published - Whether or not the post is published
 * @property {{[key: string]: IReply}} replies - The map of the top-most replies to the post (no nested replies)
 */
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
  replies: {[key: string]: IReply};
}

/**
 * Admin user interface for the /admin route.
 * 
 * @interface IUser
 * @property {string} _id - The id of the user
 * @property {string} userName - The username of the user
 * @property {string} email - The email of the user
 * @property {string} password - The password of the user
 * @property {number} articlesPublished - The number of articles the user has published
 * @property {number} createdAt - The time the user was created
 * @property {number} updatedAt - The time the user was last updated
 * @property {permissions} permissions - The permissions given to an admin user
 */
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

declare module "*.pdf" {
  const content: any;
  export default content;
}

declare module "*.mp4" {
  const content: any;
  export default content;
}