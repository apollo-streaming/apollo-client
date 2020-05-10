const INITIAL_STATE = {
  items: null,
};

export default function search(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@search/SEARCH_SUCCESS':
      return { items: action.payload.podcastList };
    default:
      return state;
  }
}
