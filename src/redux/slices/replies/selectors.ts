import type { ReduxState } from "@/redux/store";

export const selectReplies = (state: ReduxState) => state.replies.value;
export const selectReply = (state: ReduxState) => state.replies.node;