import { useSelector } from 'react-redux';

export function useGetRecentlyPlayed() {
  return useSelector((state) => state.episode.recentlyPlayed);
}
