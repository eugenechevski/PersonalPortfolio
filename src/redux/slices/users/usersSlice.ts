// Slice for managing the state of admin users

import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface AdminUsersSliceState {
  array: AdminUser[];
  map: { [key: string]: AdminUser };
  status: "idle" | "loading" | "failed";
}

export const initialState: AdminUsersSliceState = {
  array: [],
  map: {},
  status: "idle",
};

export const adminUsersSlice = createSlice({
  name: "adminUsers",
  initialState,
  reducers: {
    addAdminUser: (state, action) => {
      state.array.push(action.payload);
      state.map[action.payload.userId] = action.payload;
    },
    removeAdminUser: (state, action: PayloadAction<string>) => {
      state.array = state.array.filter(
        (user) => user._id !== action.payload
      );
      delete state.map[action.payload];
    },
    updateAdminUser: (state, action: PayloadAction<AdminUser>) => {
      const updatedUser = action.payload;

      if (state.map[updatedUser._id]) {
        // Update state
        // it updates array and map at the same time
        let existingUser = state.array.find(
          (user) => user._id === updatedUser._id
        );
        for (let key in updatedUser) {
          existingUser[key] = updatedUser[key];
        }
      }
    },
    setAdminUsers: (state, action: PayloadAction<AdminUser[]>) => {
      state.array = action.payload;
      state.map = action.payload.reduce((map, user) => {
        map[user._id] = user;
        return map;
      }, {} as { [key: string]: AdminUser });
    },
    setStatus: (
      state,
      action: PayloadAction<"idle" | "loading" | "failed">
    ) => {
      state.status = action.payload;
    },
  },
});
