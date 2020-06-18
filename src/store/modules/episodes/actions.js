export function requestEpisodes(podcastId) {
  return {
    type: '@episodes/REQUEST_EPISODES',
    payload: { podcastId },
  };
}

export function requestEpisodesSuccess(episodes) {
  return {
    type: '@episodes/REQUEST_EPISODES_SUCCESS',
    payload: { episodes },
  };
}

export function deleteEpisode(payload) {
  return {
    type: '@episodes/DELETE_EPISODE',
    payload,
  };
}

export function deleteEpisodeSuccess(episodes) {
  return {
    type: '@episodes/DELETE_EPISODE_SUCCES',
    payload: { episodes },
  };
}

export function requestPopularEpisodes() {
  return {
    type: '@episodes/REQUEST_TRENDING',
  };
}

export function requestPopularEpisodesSuccess(episodes) {
  return {
    type: '@episodes/REQUEST_TRENDING_SUCCESS',
    payload: { episodes },
  };
}
