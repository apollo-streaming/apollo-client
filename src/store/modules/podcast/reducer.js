import { Actions } from './constants';

const INITIAL_STATE = {
  current: {},
  recommended: [],
  recentlyAdded: [],
  following: [],
};

export default function reducer(state = INITIAL_STATE, action) {
  const { type } = action;

  switch (type) {
    case Actions.SET_RECOMMENDED: {
      const { payload } = action;

      return { ...state, recommended: payload.items };
    }
    case Actions.SET_RECENTLY_ADDED: {
      const { payload } = action;

      return { ...state, recentlyAdded: payload.items };
    }
    case Actions.SET_CURRENT: {
      const { payload } = action;

      return { ...state, current: payload.item };
    }
    default:
      return state;
  }
}
