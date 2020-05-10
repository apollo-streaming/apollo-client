export function searchFromTextSuccess(podcastList) {
  return {
    type: '@search/SEARCH_SUCCESS',
    payload: { podcastList },
  };
}

export function searchFromText(text) {
  return {
    type: '@search/SEARCH_REQUEST',
    payload: { text },
  };
}
