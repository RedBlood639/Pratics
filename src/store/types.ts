import { UserlistActions } from "./userlist/types";
import { BuddyAvatarActions } from "./BuddyAvatar/types";
import { MusicTimeActions } from "./MusicTime/types";
export type AppActions =
  | UserlistActions
  | BuddyAvatarActions
  | MusicTimeActions;
