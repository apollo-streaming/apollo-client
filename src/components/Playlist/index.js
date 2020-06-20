import React from 'react';
import * as PropTypes from 'prop-types';

import CreatePlaylist from './CreatePlaylist';
import PublicPlaylists from './PublicPlaylists';
import PrivatePlaylists from './PrivatePlaylists';

function Playlist({ privatePlaylists, publicPlaylists }) {
  return (
    <>
      <CreatePlaylist />
      {publicPlaylists && <PublicPlaylists items={publicPlaylists} />}
      {privatePlaylists && <PrivatePlaylists items={privatePlaylists} />}
    </>
  );
}

Playlist.propTypes = {
  // eslint-disable-next-line
  privatePlaylists: PropTypes.array,
  // eslint-disable-next-line
  publicPlaylists: PropTypes.array,
};

export default Playlist;
