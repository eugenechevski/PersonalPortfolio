// Slice for posts

import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import {
  addPostAsync,
  editPostAsync,
  deletePostAsync,
  getPostsAsync,
} from "./thunks";

const initialState: PostsSliceState = {
  value: [],
  status: "idle",
};

// We need to fetch posts from the API, so we need to create an async thunk.
// We can use the createAsyncThunk function from Redux Toolkit to do this.
// The first argument is the name of the thunk, and the second argument is a
// function that returns a promise containing the data we want to fetch.

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.value.push(action.payload);
    },
    removePost: (state, action: PayloadAction<string>) => {
      state.value = state.value.filter(
        (post) => post._id !== action.payload
      );
    },
    updatePost: (state, action: PayloadAction<IPost>) => {
      const updatedPost = action.payload;
      let existingPost = state.value.find((post) => post._id === updatedPost._id);
      if (existingPost) {
        for (let key in updatedPost) {
          existingPost[key] = updatedPost[key];
        }
      }
    },
    setPosts: (state, action) => {
      state.value = action.payload;
    },
    setStatus: (
      state,
      action: PayloadAction<"idle" | "loading" | "failed">
    ) => {
      state.status = action.payload;
    },
  },
});

export interface PostsSliceState {
  value: IPost[];
  status: "idle" | "loading" | "failed";
}
