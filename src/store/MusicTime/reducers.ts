import {
  MusicTimeActions,
  GET_FRAMETIME,
  GET_MUSICTYPE,
  GET_MUSIC,
} from "./types";

interface MusicTimerReducerState {
  frametime: any;
  musictype: any;
  music: any;
}

const MusicTimeReducer = (
  state: MusicTimerReducerState = {
    frametime: [],
    musictype: [],
    music: [],
  },
  action: MusicTimeActions
): MusicTimerReducerState => {
  switch (action.type) {
    case GET_FRAMETIME:
      return {
        ...state,
        frametime: action.payload,
      };
    case GET_MUSICTYPE:
      return {
        ...state,
        musictype: action.payload,
      };
    case GET_MUSIC:
      return {
        ...state,
        music: action.payload,
      };
    default:
      return state;
  }
};

export default MusicTimeReducer;
