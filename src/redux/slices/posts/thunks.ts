import { type ReduxDispatch, type ReduxThunkAction } from "@/redux/store";
import { selectPostsArray } from "@/redux/slices/posts/selectors";
import { postsSlice } from "./postsSlice";

// Async and sync logic for fetching posts and updating UI
export const getPostsAsync =
  (): ReduxThunkAction => async (dispatch, getState) => {
    const posts = selectPostsArray(getState());

    // If posts are already in state, don't fetch again
    if (posts.length === 0) {
      const data: IPost[] = await fetch("/api/posts", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => res.json());

      // Update UI with fetched posts
      dispatch(postsSlice.actions.setPosts(data));
    }
  };

export const addPostAsync =
  (post: IPost): ReduxThunkAction =>
  async (dispatch: ReduxDispatch) => {
    await fetch("/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    }).then((res) => res.json());

    // Update UI with new post
    dispatch(postsSlice.actions.addPost(post));
  };

export const deletePostAsync =
  (postId: string): ReduxThunkAction =>
  async (dispatch: ReduxDispatch) => {
    await fetch("/api/posts", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: postId,
    });

    // Update UI with deleted post
    dispatch(postsSlice.actions.removePost(postId));
  };

export const editPostAsync =
  (post: IPost): ReduxThunkAction =>
  async (dispatch: ReduxDispatch) => {
    await fetch("/api/posts", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    }).then((res) => res.json());

    // Update UI with edited post
    dispatch(postsSlice.actions.updatePost(post));
  };
