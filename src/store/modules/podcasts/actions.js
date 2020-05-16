export function requestPopularPodcasts() {
  return {
    type: '@podcasts/REQUEST_TRENDING',
  };
}

export function requestPopularPodcastsSuccess(podcasts) {
  return {
    type: '@podcasts/REQUEST_TRENDING_SUCCESS',
    payload: { podcasts },
  };
}
