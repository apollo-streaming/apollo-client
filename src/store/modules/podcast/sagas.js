import { takeLatest, call, put, all } from 'redux-saga/effects';
import { setRecommended, setCurrent, setRecentlyAdded } from './actions';
import { Actions } from './constants';
import history from '../../../services/history';

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

export default all([
  takeLatest(Actions.REQUEST_RECOMMENDED, requestRecommended),
  takeLatest(Actions.REQUEST_RECENTLY_ADDED, requestRecentlyAdded),
  takeLatest(Actions.REQUEST_PODCAST, requestPodcast),
]);
