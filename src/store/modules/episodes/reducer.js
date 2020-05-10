const INITIAL_STATE = {
  items: null,
};

export default function search(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@episodes/REQUEST_TRENDING_SUCCESS':
      return { items: action.payload.episodes };
    default:
      return state;
  }
}
