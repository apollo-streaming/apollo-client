const INITIAL_STATE = {
  items: [],
};

export default function search(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@podcasts/REQUEST_TRENDING_SUCCESS':
      return { items: action.payload.podcasts };
    default:
      return state;
  }
}
