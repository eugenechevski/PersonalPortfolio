import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface RepliesSliceState {
  node: IReply;
  value: IReply[];
  status: "idle" | "loading" | "failed";
}

const initialState: RepliesSliceState = {
  node : {
    _id: "",
    replies: [],
    repliedTo: "",
    authorName: "",
    content: "",
    createdAt: 0,
    likes: 0
  },
  value: [],
  status: "idle",
};

export const repliesSlice = createSlice({
  name: "replies",
  initialState,
  reducers: {
    setReplies: (state, action: PayloadAction<IReply[]>) => {
      state.value = action.payload;
    },
    addReply: (state, action: PayloadAction<IReply>) => {
      state.value.push(action.payload);
    },
    removeReply: (state, action: PayloadAction<string>) => {
      state.value = state.value.filter((reply) => reply._id !== action.payload);
    },
    updateReply: (state, action: PayloadAction<IReply>) => {
      const { _id } = action.payload;
      const index = state.value.findIndex((reply) => reply._id === _id);
      state.value[index] = action.payload;
    },
    resetReplies: (state) => {
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
