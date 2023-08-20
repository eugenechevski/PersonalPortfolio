import { type ReduxDispatch, type ReduxThunkAction } from "@/redux/store";
import { userSlice } from "./userSlice";

// Async and sync logic for fetching the logged-in user and updating UI

/**
 * Once the user is logged in, we need to fetch full data from mongoDB
 * on this user and set it in the global state.
 */
export const setUserAsync =
  (userName: string): ReduxThunkAction => async (dispatch: ReduxDispatch) => {
    const data: AdminUser = await fetch(`/api/user?userName=${encodeURIComponent(userName)}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());

    // If no user is returned, don't update state
    if (!data) {
      return;
    }

    // Update UI with fetched user
    dispatch(userSlice.actions.setUser(data));
  };
