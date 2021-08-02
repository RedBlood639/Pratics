export const GET_BUDDYAVATAR = "GET_BUDDYAVATAR";
export const EDIT_BUDDYAVATAR = "EDIT_BUDDYAVATAR";

interface GetBuddyAvatarListAction {
  type: typeof GET_BUDDYAVATAR;
  payload: any;
}
interface EditBuddyAvatarAction {
  type: typeof EDIT_BUDDYAVATAR;
  payload: any;
}

export type BuddyAvatarActions =
  | GetBuddyAvatarListAction
  | EditBuddyAvatarAction;
