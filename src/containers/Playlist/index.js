import React from 'react';

import PlaylistComponent from '../../components/Playlist';
import {
  useGetPrivatePlaylists,
  useGetPublicPlaylists,
} from '../../store/modules/playlist/selectors';

const STATIC_PRIVATE_PLAYLISTS = [
  {
    image: 'https://upload.wikimedia.org/wikipedia/pt/7/78/Nerdcast_-_2006.jpg',
    title: 'Nerdcast',
  },
  {
    image: 'https://i4.sndcdn.com/avatars-000314071007-g4fkke-t500x500.jpg',
    title: 'Diagrama',
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/pt/7/78/Nerdcast_-_2006.jpg',
    title: 'Nerdcast',
  },
  {
    image: 'https://i4.sndcdn.com/avatars-000314071007-g4fkke-t500x500.jpg',
    title: 'Diagrama',
  },
];

const STATIC_PUBLIC_PLAYLISTS = STATIC_PRIVATE_PLAYLISTS;

function Playlist() {
  const privatePlaylists = useGetPrivatePlaylists();
  const publicPlaylists = useGetPublicPlaylists();

  return <PlaylistComponent {...{ privatePlaylists, publicPlaylists }} />;
}

export default Playlist;
