import { useSelector } from 'react-redux';

export function useGetCurrentPodcast() {
  return useSelector((state) => state.podcast.current);
}

export function useGetRecommendedPodcasts() {
  return useSelector((state) => state.podcast.recommended);
}

export function useGetRecentlyAddedPodcasts() {
  return useSelector((state) => state.podcast.recentlyAdded);
}

export function useGetFollowing() {
  return useSelector((state) => state.podcast.recommended);
}
