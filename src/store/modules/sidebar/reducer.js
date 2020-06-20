import { Actions } from './constants';

const INITIAL_STATE = {
  opened: false,
  state: 'displayRecentlyPlayed',
};

export default function reducer(state = INITIAL_STATE, action) {
  const { type } = action;

  switch (type) {
    case Actions.TOGGLE: {
      const { payload } = action;

      if (payload.to) return { ...state, opened: payload.to };

      return { ...state, opened: !state.opened };
    }
    case Actions.CHANGE_STATE: {
      const { payload } = action;
      return { ...state, state: payload.state };
    }
    default:
      return state;
  }
}
