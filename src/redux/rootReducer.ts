/* Instruments */
import { postsSlice } from "./slices/posts/postsSlice"
import { userSlice } from "./slices/user/userSlice"
import { adminUsersSlice } from "./slices/users/usersSlice"
import { repliesSlice } from "./slices/replies/repliesSlice"

export const reducer = {
  posts: postsSlice.reducer,
  user: userSlice.reducer,
  users: adminUsersSlice.reducer,
  replies: repliesSlice.reducer,
}