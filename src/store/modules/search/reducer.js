import { Actions } from './constants';

const INITIAL_STATE = {
  searching: false,
  results: [],
};

export default function reducer(state = INITIAL_STATE, action) {
  const { type } = action;

  switch (type) {
    case Actions.SET_SEARCHING: {
      const { payload } = action;
      return { ...state, searching: payload.searching };
    }
    case Actions.SET_RESULTS: {
      const { payload } = action;
      return { ...state, results: payload.items };
    }
    default:
      return state;
  }
}
