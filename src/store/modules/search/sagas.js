import { takeLatest, call, put, all } from 'redux-saga/effects';
import { searchFromTextSuccess } from './actions';
import history from '../../../services/history';

export function* searchFromText({ payload }) {
  const { text } = payload;

  const data = yield call(fetch, `http://localhost:4567/podcast?q=${text}`, {
    method: 'GET',
    mode: 'cors',
    cache: 'default',
  });

  const response = yield data.json();

  yield put(searchFromTextSuccess(response));
}

export default all([takeLatest('@search/SEARCH_REQUEST', searchFromText)]);
