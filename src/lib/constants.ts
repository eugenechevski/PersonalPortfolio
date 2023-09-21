export const userNamePattern =
  "^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$"; // digits, letters, and special characters
export const emailPattern = "^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$";
export const passwordPattern =
  "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|]).{8,32}$"; // 8 characters, 1 lowercase, 1 uppercase, 1 number, 1 special character
export const imageUrlPattern =
  "^(http(s?):)([/|.|\\w|\\s|-])*\\.(?:jpg|gif|png)$";
export const textColor = "#6B21A5";

export const dummyPost: IPost = {
  _id: "1",
  title: "Post 1",
  content: "This is post 1",
  imageURL: "https://picsum.photos/200/300",
  author: "admin",
  likes: 0,
  createdAt: 0,
  updatedAt: 0,
  published: true,
  replies: {},
};

export const dummyReply: IReply = {
  _id: "1",
  repliedTo: dummyPost,
  authorName: "admin",
  content: "This is a reply",
  createdAt: 0,
  likes: 0,
};

dummyPost.replies[dummyReply._id] = dummyReply;
