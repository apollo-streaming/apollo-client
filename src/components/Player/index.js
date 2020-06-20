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
  box-shadow: 0 0 0.3rem rgba(0, 0, 0, 0.3);
`;

const STATIC_INFO = {
  episode: {
    image: 'https://i1.sndcdn.com/avatars-000445864257-cuwg3m-t500x500.jpg',
    podcast: 'The Ground Up Show',
    episode: 'Ep. X - Lorem ipsum dolor sit amet',
  },
};

function Player({ episodeInfo = STATIC_INFO }) {
  return (
    <PlayerContainer justifyContent="space-between">
      <EpisodeInfo {...episodeInfo.episode} />
      <PlayerControls current={2734} duration={3000} />
      <SideControls />
    </PlayerContainer>
  );
}

Player.propTypes = {
  // eslint-disable-next-line
  episodeInfo: PropTypes.object,
};

export default Player;
