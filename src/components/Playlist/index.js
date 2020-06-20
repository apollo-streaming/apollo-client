import React from 'react';
import * as PropTypes from 'prop-types';

import CreatePlaylist from './CreatePlaylist';
import PublicPlaylists from './PublicPlaylists';
import PrivatePlaylists from './PrivatePlaylists';
import { Text } from '../../design-system/Typography';

function Playlist({ privatePlaylists, publicPlaylists }) {
  return (
    <>
      <CreatePlaylist />
      {!publicPlaylists.length && !privatePlaylists.length && (
        <Text weight="bold" size="large">
          Você ainda não possui playlists salvas.
        </Text>
      )}
      {!!publicPlaylists.length && <PublicPlaylists items={publicPlaylists} />}
      {!!privatePlaylists.length && (
        <PrivatePlaylists items={privatePlaylists} />
      )}
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
