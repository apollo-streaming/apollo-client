import { takeLatest, call, put, all } from 'redux-saga/effects';
import { Actions } from './constants';
import { updateJwtAndUsername } from './actions';
import * as SidebarActions from '../sidebar/actions';
import history from '../../../services/history';

// export function* requestPopularEpisodes() {
//   const data = yield call(fetch, 'http://localhost:4567/episode', {
//     method: 'GET',
//     mode: 'cors',
//     cache: 'default',
//   });

//   const response = yield data.json();

//   yield put(requestPopularEpisodesSuccess(response.items));
// }

// export function* requestEpisodesHandler({ payload }) {
//   const data = yield call(
//     fetch,
//     `http://localhost:4567/episode?podcast_id=${payload.podcastId}`,
//     {
//       method: 'GET',
//       mode: 'cors',
//       cache: 'default',
//     }
//   );

//   const response = yield data.json();

//   console.log(response);

//   yield put(requestPopularEpisodesSuccess(response.items));
// }

function* updateAuthData(jwt, name) {
  yield put(updateJwtAndUsername(jwt, name));
  yield put(localStorage.setItem('jwt', jwt));
  yield put(localStorage.setItem('username', name));
  yield put(SidebarActions.toggle(true));
  yield put(SidebarActions.changeState('displayRecentlyPlayed'));
  yield put(history.push('/'));
}

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
  yield put(history.push('/'));
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
  yield put(history.push('/'));
}

export default all([
  takeLatest(Actions.SIGNUP_REQUEST, signUpRequest),
  takeLatest(Actions.SIGNIN_REQUEST, signinRequest),
]);
