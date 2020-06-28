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

export function setIntervalID(id) {
  return {
    type: Actions.SET_INTERVAL_ID,
    payload: { id },
  };
}

export function setAudioRef(audio) {
  return {
    type: Actions.SET_AUDIO,
    payload: { audio },
  };
}

export function addToHistory(time, episodeId, jwt) {
  return {
    type: Actions.ADD_TO_HISTORY,
    payload: { time, episodeId, jwt },
  };
}

export function incrementCurrentTime() {
  return {
    type: Actions.INCREMENT_CURRENT_TIME,
  };
}

export function addCommentaryToActive(commentary) {
  return {
    type: Actions.ADD_COMMENTARY_TO_ACTIVE,
    payload: { commentary },
  };
}

export function setActive(dispatch, episode, keepTime = false) {
  if (!keepTime) {
    dispatch(SidebarActions.changeState('displayEpisodeInfo'));
    dispatch(setCurrentTime(episode.stoppedAt || 0));
    dispatch(setStartedPlaying(false));
  }
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
