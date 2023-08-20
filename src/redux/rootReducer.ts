/* Instruments */
import { postsSlice } from "./slices/posts/postsSlice"
import { userSlice } from "./slices/user/userSlice"

export const reducer = {
  posts: postsSlice.reducer,
  user: userSlice.reducer,
}