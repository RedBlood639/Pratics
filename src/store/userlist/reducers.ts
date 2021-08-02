import { UserlistActions, GET_USERLIST, EDIT_USER } from "./types";

interface UserlistReducerState {
  list: any;
  count: number;
}

const UserlistReducer = (
  state: UserlistReducerState = {
    list: [],
    count: 0,
  },
  action: UserlistActions
): UserlistReducerState => {
  switch (action.type) {
    case GET_USERLIST:
      return {
        ...state,
        list: action.payload.items,
        count: action.payload.count,
      };
    case EDIT_USER:
      return {
        ...state,
        list: action.payload,
      };
    default:
      return state;
  }
};

export default UserlistReducer;
