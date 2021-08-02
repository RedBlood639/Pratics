import { EDIT_BUDDYAVATAR, GET_BUDDYAVATAR, BuddyAvatarActions } from "./types";
import { Dispatch } from "redux";
import { AppState } from "..";
import { AppActions } from "../types";
import apiClient from "../../components/apiClient";

const FetchBuddyAvatarlist = (payload: any): BuddyAvatarActions => {
  return {
    type: GET_BUDDYAVATAR,
    payload,
  };
};

const FetchBuddyAvatarEdit = (payload: any): BuddyAvatarActions => {
  return {
    type: EDIT_BUDDYAVATAR,
    payload,
  };
};

export const GetBuddyAvatarList = (): any => {
  return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    apiClient
      .get("/affirmation/buddy")
      .then((res) => dispatch(FetchBuddyAvatarlist(res.data.data)))
      .catch((e) => {
        console.log(e);
      });
  };
};

export const EditBuddyAvatar = (): any => {
  return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    console.log(`object`);
  };
};
