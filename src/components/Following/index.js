import React from 'react';
import * as PropTypes from 'prop-types';

import List from './List';
import { H1 } from '../../design-system/Typography';
import GRID from '../../design-system/GRID';

function Playlist({ following }) {
  return (
    <>
      <H1 size="x_large" weight="bold" mb={GRID.GET(3)}>
        Artistas que sigo
      </H1>
      {following && <List items={following} />}
    </>
  );
}

Playlist.propTypes = {
  // eslint-disable-next-line
  following: PropTypes.array,
};

export default Playlist;
