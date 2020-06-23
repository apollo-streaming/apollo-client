import { Actions } from './constants';

export function setSearching(searching) {
  return {
    type: Actions.SET_SEARCHING,
    payload: { searching },
  };
}

export function searchFromText(text) {
  return {
    type: Actions.SEARCH_FROM_TEXT,
    payload: { text },
  };
}

export function setResults(items) {
  return {
    type: Actions.SET_RESULTS,
    payload: { items },
  };
}
