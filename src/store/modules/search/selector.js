import { useSelector } from 'react-redux';

export function useIsSearching() {
  return useSelector((state) => state.search.searching);
}

export function useSearchResults() {
  return useSelector((state) => state.search.results);
}
