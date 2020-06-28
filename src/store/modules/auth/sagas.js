import { takeLatest, call, put, all } from 'redux-saga/effects';
import { Actions } from './constants';
import { updateJwtAndUsername } from './actions';
import * as SidebarActions from '../sidebar/actions';

function* signUpRequest({ payload }) {
  const data = yield call(fetch, `http://localhost:4567/signup`, {
    method: 'POST',
    body: JSON.stringify(payload),
  });

  if (data.status !== 200) {
    return;
  }
  const response = yield data.json();

  yield put(updateJwtAndUsername(response.items, payload.name));
  yield put(SidebarActions.toggle(true));
  yield put(SidebarActions.changeState('displayRecentlyPlayed'));
}

function* signinRequest({ payload }) {
  const data = yield call(fetch, `http://localhost:4567/login`, {
    method: 'POST',
    body: JSON.stringify(payload),
  });

  if (data.status !== 200) {
    return;
  }
  const response = yield data.json();

  yield put(updateJwtAndUsername(response.items, 'Thalles'));
  yield put(SidebarActions.toggle(true));
  yield put(SidebarActions.changeState('displayRecentlyPlayed'));
}

export default all([
  takeLatest(Actions.SIGNUP_REQUEST, signUpRequest),
  takeLatest(Actions.SIGNIN_REQUEST, signinRequest),
]);
