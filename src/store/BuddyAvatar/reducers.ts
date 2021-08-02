import { BuddyAvatarActions, GET_BUDDYAVATAR, EDIT_BUDDYAVATAR } from "./types";

interface BuddyAvatarReducerState {
  list: any;
}

const BuddyAvatarReducer = (
  state: BuddyAvatarReducerState = {
    list: [],
  },
  action: BuddyAvatarActions
): BuddyAvatarReducerState => {
  switch (action.type) {
    case GET_BUDDYAVATAR:
      return {
        ...state,
        list: action.payload,
      };
    case EDIT_BUDDYAVATAR:
      return {
        ...state,
        list: action.payload,
      };
    default:
      return state;
  }
};

export default BuddyAvatarReducer;
