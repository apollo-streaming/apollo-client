import { Actions } from './constants';

export function requestRecommended() {
  return {
    type: Actions.REQUEST_RECOMMENDED,
  };
}

export function requestRecentlyAdded() {
  return {
    type: Actions.REQUEST_RECENTLY_ADDED,
  };
}

export function requestFollowing(jwt) {
  return {
    type: Actions.REQUEST_FOLLOWING,
    payload: { jwt },
  };
}

export function setFollowing(items) {
  return {
    type: Actions.SET_FOLLOWING,
    payload: { items },
  };
}

export function followOrUnfollow(podcastId, jwt) {
  return {
    type: Actions.FOLLOW_OR_UNFOLLOW,
    payload: { podcastId, jwt },
  };
}

export function request(name) {
  return {
    type: Actions.REQUEST_PODCAST,
    payload: { name },
  };
}

export function setRecommended(items) {
  return {
    type: Actions.SET_RECOMMENDED,
    payload: { items },
  };
}

export function setRecentlyAdded(items) {
  return {
    type: Actions.SET_RECENTLY_ADDED,
    payload: { items },
  };
}

export function setCurrent(item) {
  return {
    type: Actions.SET_CURRENT,
    payload: { item },
  };
}

export function addCommentaryToCurrentEpisode(episodeId, commentary) {
  return {
    type: Actions.ADD_COMMENTARY_TO_CURRENT_EPISODE,
    payload: { episodeId, commentary },
  };
}
