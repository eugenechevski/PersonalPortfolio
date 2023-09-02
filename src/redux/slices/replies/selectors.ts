import type { ReduxState } from "@/redux/store";

export const selectReplies = (state: ReduxState) => state.replies.value;