import { type ReduxDispatch, type ReduxThunkAction } from "@/redux/store";
import { selectUsersArray } from "@/redux/slices/users/selectors";
import { adminUsersSlice } from "./usersSlice";

// Async and sync logic for fetching users and updating UI
export const getUsersAsync =
  (): ReduxThunkAction => async (dispatch) => {
    const data: AdminUser[] = await fetch("/api/users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());

    // Update UI with fetched users
    dispatch(adminUsersSlice.actions.setAdminUsers(data));
  };

export const addUserAsync =
  (user: AdminUser): ReduxThunkAction =>
  async (dispatch: ReduxDispatch) => {
    await fetch("/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then((res) => res.json());

    // Update UI with new user
    dispatch(adminUsersSlice.actions.addAdminUser(user));
  };

export const deleteUserAsync =
  (userId: string): ReduxThunkAction =>
  async (dispatch: ReduxDispatch) => {
    await fetch("/api/users", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: userId,
    });

    // Update UI with deleted user
    dispatch(adminUsersSlice.actions.removeAdminUser(userId));
  };

export const editUserAsync =
  (user: AdminUser): ReduxThunkAction =>
  async (dispatch: ReduxDispatch, getState) => {
    await fetch("/api/users", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then((res) => res.json());

    // Update UI with edited user
    dispatch(adminUsersSlice.actions.updateAdminUser(user));
  };
