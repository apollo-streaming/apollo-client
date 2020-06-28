import { takeLatest, call, put, all } from 'redux-saga/effects';
import { Actions } from './constants';
import * as PodcastActions from '../podcast/actions';
import * as PlayerActions from '../player/actions';

export function* addRequest({ payload }) {
  const { jwt, text, episodeId } = payload;

  const data = yield call(fetch, `http://localhost:4567/commentary`, {
    method: 'POST',
    body: JSON.stringify({ text, episodeId }),
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  });

  const response = yield data.json();

  yield put(
    PodcastActions.addCommentaryToCurrentEpisode(episodeId, response.items)
  );
  yield put(PlayerActions.addCommentaryToActive(response.items));
}

export default all([takeLatest(Actions.ADD_COMMENTARY_REQUEST, addRequest)]);
