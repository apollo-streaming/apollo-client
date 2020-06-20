import { Actions } from './constants';

const INITIAL_STATE = {
  display: false,
  playing: false,
  startedPlaying: false,
  episode: null,
  time: 0,
};

export default function reducer(state = INITIAL_STATE, action) {
  const { type } = action;

  switch (type) {
    case Actions.SET_CURRENT_TIME: {
      const { payload } = action;

      return { ...state, time: payload.time };
    }
    case Actions.SET_STARTED_PLAYING: {
      const { payload } = action;

      return { ...state, startedPlaying: payload.playing };
    }
    case Actions.INCREMENT_CURRENT_TIME: {
      return { ...state, time: state.time + 1 };
    }
    case Actions.SET_ACTIVE: {
      const { payload } = action;

      return { ...state, episode: payload.episode, playing: true };
    }
    case Actions.TOGGLE_PLAY: {
      return { ...state, playing: !state.playing };
    }
    default:
      return state;
  }
}
