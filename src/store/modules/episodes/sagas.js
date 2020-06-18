import { takeLatest, call, put, all } from 'redux-saga/effects';
import { requestPopularEpisodesSuccess, requestEpisodes } from './actions';

export function* requestPopularEpisodes() {
  const data = yield call(fetch, 'http://localhost:4567/episode', {
    method: 'GET',
    mode: 'cors',
    cache: 'default',
  });

  const response = yield data.json();

  yield put(requestPopularEpisodesSuccess(response.items));
}

export function* requestEpisodesHandler({ payload }) {
  const data = yield call(
    fetch,
    `http://localhost:4567/episode?podcast_id=${payload.podcastId}`,
    {
      method: 'GET',
      mode: 'cors',
      cache: 'default',
    }
  );

  const response = yield data.json();

  console.log(response);

  yield put(requestPopularEpisodesSuccess(response.items));
}

function* requestDeleteEpisode({ payload }) {
  const data = yield call(
    fetch,
    `http://localhost:4567/episodes/${payload.id}`,
    {
      method: 'DELETE',
    }
  );

  if (data.status === 200) {
    yield put(requestEpisodes(payload.podcastId));
  }
}

export default all([
  takeLatest('@episodes/REQUEST_TRENDING', requestPopularEpisodes),
  takeLatest('@episodes/REQUEST_EPISODES', requestEpisodesHandler),
  takeLatest('@episodes/DELETE_EPISODE', requestDeleteEpisode),
]);
