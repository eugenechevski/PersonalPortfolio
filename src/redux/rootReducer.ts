/* Instruments */
import { postsSlice } from "./slices/posts/postsSlice"
import { userSlice } from "./slices/user/userSlice"
import { adminUsersSlice } from "./slices/users/usersSlice"

export const reducer = {
  posts: postsSlice.reducer,
  user: userSlice.reducer,
  users: adminUsersSlice.reducer,
}