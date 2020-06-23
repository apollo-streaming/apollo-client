import { all } from 'redux-saga/effects';
import auth from './auth/sagas';
import player from './player/sagas';
import podcast from './podcast/sagas';
import search from './search/sagas';

export default function* rootSaga() {
  return yield all([auth, player, podcast, search]);
}
