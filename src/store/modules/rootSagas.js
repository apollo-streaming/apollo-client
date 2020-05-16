import { all } from 'redux-saga/effects';
import search from './search/sagas';
import episodes from './episodes/sagas';
import podcasts from './podcasts/sagas';

export default function* rootSaga() {
  return yield all([search, episodes, podcasts]);
}
