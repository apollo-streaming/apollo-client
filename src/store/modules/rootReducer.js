import { combineReducers } from 'redux';
import episode from './episode/reducer';
import playlist from './playlist/reducer';
import podcast from './podcast/reducer';
import player from './player/reducer';
import sidebar from './sidebar/reducer';

export default combineReducers({ episode, playlist, podcast, player, sidebar });
