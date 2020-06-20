import { useSelector } from 'react-redux';

export function useGetPrivatePlaylists() {
  return useSelector((state) => state.playlist.private);
}

export function useGetPublicPlaylists() {
  return useSelector((state) => state.playlist.public);
}
