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
