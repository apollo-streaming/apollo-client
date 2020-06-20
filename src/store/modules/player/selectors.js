import { useSelector } from 'react-redux';

export function useCurrentTimeInPlayer() {
  return useSelector((state) => state.player.time);
}

export function useCurrentEpisode() {
  return useSelector((state) => state.player.episode);
}

export function useIsPlaying() {
  return useSelector((state) => state.player.playing);
}
