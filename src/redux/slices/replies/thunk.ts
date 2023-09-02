import { type ReduxDispatch, type ReduxThunkAction } from "@/redux/store";
import { repliesSlice } from "./repliesSlice";

export const getRepliesAsync =
  (replyId: string): ReduxThunkAction =>
  async (dispatch: ReduxDispatch) => {
    const data: IReply[] = await fetch(`/api/replies/${replyId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());

    // Update UI with fetched replies
    dispatch(repliesSlice.actions.setReplies(data));
  };

export const addReplyAsync =
  (reply: IReply): ReduxThunkAction =>
  async (dispatch: ReduxDispatch) => {
    await fetch("/api/replies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reply),
    }).then((res) => res.json());

    // Update UI with new reply
    dispatch(repliesSlice.actions.addReply(reply));
  };

export const deleteReplyAsync =
  (replyId: string): ReduxThunkAction =>
  async (dispatch: ReduxDispatch) => {
    await fetch(`/api/replies/${replyId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Update UI with deleted reply
    dispatch(repliesSlice.actions.removeReply(replyId));
  };

export const editReplyAsync =
  (reply: IReply): ReduxThunkAction =>
  async (dispatch: ReduxDispatch) => {
    await fetch("/api/replies", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reply),
    }).then((res) => res.json());

    // Update UI with edited reply
    dispatch(repliesSlice.actions.updateReply(reply));
  };
