import { takeLatest, call, put, all } from 'redux-saga/effects';
import { requestPopularPodcastsSuccess } from './actions';

export function* requestPopularPodcasts() {
  const data = yield call(fetch, 'http://localhost:4567/podcasts', {
    method: 'GET',
    mode: 'cors',
    cache: 'default',
  });

  const response = yield data.json();

  yield put(requestPopularPodcastsSuccess(response.items));
}

export default all([
  takeLatest('@podcasts/REQUEST_TRENDING', requestPopularPodcasts),
]);
