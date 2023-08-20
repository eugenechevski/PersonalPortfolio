import type { ReduxState } from "@/redux/store";

export const selectUser = (state: ReduxState) => state.user.value;