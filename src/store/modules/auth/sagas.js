import { takeLatest, call, put, all } from 'redux-saga/effects';
import { signupSuccess } from './actions';

export function signup(payload) {
  console.log(payload);
  /*   const data = yield call(fetch, 'http://localhost:4567/user', {
    method: 'POST',
    mode: 'cors',
    cache: 'default',
    body,
  });

  const response = yield data.json();

  yield put(signupSuccess(response)); */
}

export default all([takeLatest('@auth/SIGNUP_REQUEST', signup)]);
