import React from 'react';
import * as PropTypes from 'prop-types';
import styled from 'styled-components';

import COLORS from '../../design-system/COLORS';
import GRID from '../../design-system/GRID';
import Flex from '../../design-system/Flex';
import EpisodeInfo from './EpisodeInfo';
import PlayerControls from './PlayerControls';
import SideControls from './SideControls';

const PlayerContainer = styled(Flex)`
  background-color: ${COLORS.CLEAR_100};
  padding: ${`${GRID.GET(3)} ${GRID.GET(5)}`};
  width: 100vw;
  position: absolute;
  left: 0;
  bottom: 0;
`;

function Player({ episodeInfo, isPlaying, onPlay }) {
  return (
    <PlayerContainer justifyContent="space-between">
      <EpisodeInfo {...episodeInfo} />
      <PlayerControls
        current={episodeInfo.current}
        duration={episodeInfo.duration}
        isPlaying={isPlaying}
        onPlay={onPlay}
      />
      <SideControls />
    </PlayerContainer>
  );
}

Player.propTypes = {
  // eslint-disable-next-line
  episodeInfo: PropTypes.object,
  isPlaying: PropTypes.bool,
  onPlay: PropTypes.func,
};

export default Player;
