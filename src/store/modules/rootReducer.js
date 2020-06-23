import { combineReducers } from 'redux';
import episode from './episode/reducer';
import playlist from './playlist/reducer';
import podcast from './podcast/reducer';
import player from './player/reducer';
import search from './search/reducer';
import sidebar from './sidebar/reducer';
import auth from './auth/reducer';

export default combineReducers({
  auth,
  episode,
  playlist,
  podcast,
  player,
  search,
  sidebar,
});
