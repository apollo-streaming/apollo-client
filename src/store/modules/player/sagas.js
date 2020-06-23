import { takeLatest, call, put, all } from 'redux-saga/effects';
import { Actions } from './constants';

export function* addToHistory({ payload }) {
  const { time: progress, episodeId: episode_id, jwt } = payload;
  const data = yield call(fetch, `http://localhost:4567/history`, {
    method: 'POST',
    mode: 'cors',
    cache: 'default',
    headers: {
      authorization: `Bearer ${jwt}`,
    },
    body: JSON.stringify({ progress, episode_id }),
  });

  const response = yield data.json();

  console.log({ response });
}

export default all([takeLatest(Actions.ADD_TO_HISTORY, addToHistory)]);
