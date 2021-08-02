export const GET_FRAMETIME = "GET_FRAMETIME";
export const GET_MUSICTYPE = "GET_MUSICTYPE";
export const GET_MUSIC = "GET_MUSIC";

interface GetFrametimeAction {
  type: typeof GET_FRAMETIME;
  payload: any;
}

interface GetMusictypeAction {
  type: typeof GET_MUSICTYPE;
  payload: any;
}

interface GetMusicAction {
  type: typeof GET_MUSIC;
  payload: any;
}

export type MusicTimeActions =
  | GetFrametimeAction
  | GetMusictypeAction
  | GetMusicAction;
