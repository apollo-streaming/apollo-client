import { takeLatest, call, put, all } from 'redux-saga/effects';
import history from '../../../services/history';

import {
  setRecommended,
  setCurrent,
  setRecentlyAdded,
  setFollowing,
} from './actions';
import { Actions } from './constants';

export function* requestRecommended() {
  const data = yield call(fetch, `http://localhost:4567/podcasts`, {
    method: 'GET',
    mode: 'cors',
    cache: 'default',
  });

  const response = yield data.json();

  yield put(setRecommended(response.items));
}

export function* requestRecentlyAdded() {
  const data = yield call(fetch, `http://localhost:4567/episode?o=1`, {
    method: 'GET',
    mode: 'cors',
    cache: 'default',
  });

  const response = yield data.json();

  yield put(setRecentlyAdded(response.items));
}

export function* requestPodcast({ payload }) {
  const { name } = payload;
  const data = yield call(fetch, `http://localhost:4567/podcasts?q=${name}`, {
    method: 'GET',
    mode: 'cors',
    cache: 'default',
  });

  const response = yield data.json();

  if (response.items.length === 0) {
    yield put(history.goBack());
  } else {
    yield put(setCurrent(response.items[0]));
  }
}

function* followOrUnfollow({ payload }) {
  const { podcastId, jwt } = payload;

  yield call(fetch, `http://localhost:4567/podcast/${podcastId}/follow`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  });
}

function* requestFollowing({ payload }) {
  const { jwt } = payload;

  const data = yield call(fetch, `http://localhost:4567/podcast/following`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  });

  const response = yield data.json();

  yield put(setFollowing(response.items));
}

export default all([
  takeLatest(Actions.REQUEST_RECOMMENDED, requestRecommended),
  takeLatest(Actions.REQUEST_RECENTLY_ADDED, requestRecentlyAdded),
  takeLatest(Actions.REQUEST_PODCAST, requestPodcast),
  takeLatest(Actions.FOLLOW_OR_UNFOLLOW, followOrUnfollow),
  takeLatest(Actions.REQUEST_FOLLOWING, requestFollowing),
]);
