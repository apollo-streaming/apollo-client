import { Actions } from './constants';
import * as SidebarActions from '../sidebar/actions';

export function setCurrentTime(time) {
  return {
    type: Actions.SET_CURRENT_TIME,
    payload: { time },
  };
}

export function setStartedPlaying(playing) {
  return {
    type: Actions.SET_STARTED_PLAYING,
    payload: { playing },
  };
}

export function incrementCurrentTime() {
  return {
    type: Actions.INCREMENT_CURRENT_TIME,
  };
}

export function setActive(dispatch, episode) {
  dispatch(SidebarActions.changeState('displayEpisodeInfo'));
  dispatch(setCurrentTime(0));
  dispatch(setStartedPlaying(false));
  return {
    type: Actions.SET_ACTIVE,
    payload: { episode },
  };
}

export function togglePlay(dispatch, isPlaying) {
  dispatch(
    SidebarActions.changeState(
      isPlaying ? 'displayRecentlyPlayed' : 'displayEpisodeInfo'
    )
  );
  return {
    type: Actions.TOGGLE_PLAY,
  };
}
