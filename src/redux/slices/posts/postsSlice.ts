// Slice for posts

import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState: PostsSliceState = {
  array: [],
  map: {},
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
      state.array.push(action.payload);
      state.map[action.payload._id] = state.array[state.array.length - 1];
    },
    removePost: (state, action: PayloadAction<string>) => {
      state.array = state.array.filter((post) => post._id !== action.payload);
      delete state.map[action.payload];
    },
    updatePost: (state, action: PayloadAction<IPost>) => {
      const updatedPost = action.payload;

      if (state.map[updatedPost._id]) {
        // updates the map and array at the same time
        for (const key in updatedPost) {
          state.map[updatedPost._id][key] = updatedPost[key];
        }

        const index = state.array.findIndex(
          (post) => post._id === updatedPost._id
        );

        // update the array
        for (const key in updatedPost) {
          state.array[index][key] = updatedPost[key];
        }
      }
    },
    setPosts: (state, action) => {
      state.array = action.payload;
      state.map = {};
      state.array.forEach((post) => {
        state.map[post._id] = post;
      });
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
  array: IPost[];
  map: { [key: string]: IPost };
  status: "idle" | "loading" | "failed";
}
