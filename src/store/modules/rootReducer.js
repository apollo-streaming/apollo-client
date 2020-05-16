import { combineReducers } from 'redux';
import search from './search/reducer';
import episodes from './episodes/reducer';
import podcasts from './podcasts/reducer';

export default combineReducers({ search, episodes, podcasts });
