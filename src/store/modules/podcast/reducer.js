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
    case Actions.SET_FOLLOWING: {
      const { payload } = action;
      console.log({ payload });

      return { ...state, following: payload.items };
    }
    case Actions.ADD_COMMENTARY_TO_CURRENT_EPISODE: {
      const { payload } = action;

      const { current } = state;

      if (Object.keys(current).length) {
        const episodes = current.episodes.map((ep) => {
          if (ep.id === payload.episodeId) {
            ep.commentaries = [...ep.commentaries, payload.commentary];
          }

          return ep;
        });

        return { ...state, current: { ...current, episodes } };
      }

      return state;
    }
    default:
      return state;
  }
}
