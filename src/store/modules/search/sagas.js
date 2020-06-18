import { takeLatest, call, put, all } from 'redux-saga/effects';
import { searchFromTextSuccess } from './actions';

export function* searchFromText({ payload }) {
  const { text } = payload;

  const data = yield call(fetch, `http://localhost:4567/podcasts?q=${text}`, {
    method: 'GET',
    mode: 'cors',
    cache: 'default',
  });

  const response = yield data.json();

  yield put(searchFromTextSuccess(response.items));
}

export default all([takeLatest('@search/SEARCH_REQUEST', searchFromText)]);
