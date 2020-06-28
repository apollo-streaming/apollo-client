import { Actions } from './constants';

export function addRequest(episodeId, text, jwt, dispatch) {
  return {
    type: Actions.ADD_COMMENTARY_REQUEST,
    payload: { episodeId, text, jwt, dispatch },
  };
}
