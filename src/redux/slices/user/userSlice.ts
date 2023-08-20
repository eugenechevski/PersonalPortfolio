// Slice for logged-in admin user.

import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface UserSliceState {
  value: AdminUser;
  status: "idle" | "loading" | "failed";
}

const initialState: UserSliceState = {
  value: {
    userId: "",
    userName: "",
    email: "",
    password: "",
    createdAt: 0,
    permissions: {
      createPost: false,
      editPost: false,
      deletePost: false,
      createUser: false,
      editUser: false,
      deleteUser: false,
    },
    articlesPublished: 0,
  },
  status: "idle",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<AdminUser>) => {
      state.value = action.payload;
    },
    resetUser: (state) => {
      state.value = initialState.value;
    },
    setStatus: (
      state,
      action: PayloadAction<"idle" | "loading" | "failed">
    ) => {
      state.status = action.payload;
    },
  },
});
