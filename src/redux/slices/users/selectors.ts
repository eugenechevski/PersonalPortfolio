import type { ReduxState } from '@/redux/store'

export const selectUsersArray = (state: ReduxState) => state.users.array
export const selectUsersMap = (state: ReduxState) => state.users.map