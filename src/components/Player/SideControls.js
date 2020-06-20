import React from 'react';
import Flex from '../../design-system/Flex';
import Icon from '../../design-system/Icon';
import ProgressBar from './ProgressBar';
import GRID from '../../design-system/GRID';

function SideControls() {
  return (
    <Flex alignItems="center">
      <Icon name="queue" />
      <Flex alignItems="center" ml={GRID.GET(5)}>
        <Icon name="volume" />
        <ProgressBar width={GRID.GET(10)} progress={80} ml={GRID.GET(2)} />
      </Flex>
    </Flex>
  );
}

export default SideControls;
