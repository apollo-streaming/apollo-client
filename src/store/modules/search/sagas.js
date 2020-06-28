import { takeLatest, call, put, all } from 'redux-saga/effects';
import { setResults } from './actions';
import { Actions } from './constants';

export function* searchFromText({ payload }) {
  const { text } = payload;

  const data = yield call(fetch, `http://localhost:4567/search?q=${text}`, {
    method: 'GET',
  });

  console.log({ text });

  const response = yield data.json();

  yield put(setResults(response.items.podcasts));
}

export default all([takeLatest(Actions.SEARCH_FROM_TEXT, searchFromText)]);
