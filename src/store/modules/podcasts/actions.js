export function requestPopularPodcasts() {
  return {
    type: '@podcasts/REQUEST_TRENDING',
  };
}

export function requestPopularPodcastsSuccess(Podcasts) {
  return {
    type: '@podcasts/REQUEST_TRENDING_SUCCESS',
    payload: { Podcasts },
  };
}
