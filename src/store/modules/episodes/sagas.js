import { takeLatest, call, put, all } from 'redux-saga/effects';
import { requestPopularEpisodesSuccess } from './actions';

export function* requestPopularEpisodes() {
  const data = yield call(fetch, 'http://localhost:4567/episode', {
    method: 'GET',
    mode: 'cors',
    cache: 'default',
  });

  const response = yield data.json();

  yield put(requestPopularEpisodesSuccess(response));
}

export default all([
  takeLatest('@episodes/REQUEST_TRENDING', requestPopularEpisodes),
]);
