export const GET_USERLIST = "GET_USERLIST";
export const EDIT_USER = "EDIT_USER";

interface UserlistAction {
  type: typeof GET_USERLIST;
  payload: any;
}
interface EditUserAction {
  type: typeof EDIT_USER;
  payload: any;
}

export type UserlistActions = UserlistAction | EditUserAction;
