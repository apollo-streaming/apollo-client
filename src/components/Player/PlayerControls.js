import React from 'react';
import * as PropTypes from 'prop-types';
import { Text } from '../../design-system/Typography';
import COLORS from '../../design-system/COLORS';
import GRID from '../../design-system/GRID';
import Icon from '../../design-system/Icon';
import Flex from '../../design-system/Flex';
import { transformSecondsToTimeframe } from '../../utils/functional';
import ProgressBar from './ProgressBar';

function PlayerControls({ current, duration }) {
  return (
    <Flex direction="column">
      <Flex justifyContent="center" alignItems="center" mb={GRID.GET(1)}>
        <Icon name="shuffle" />
        <Flex alignItems="center" ml={GRID.GET(12)} mr={GRID.GET(12)}>
          <Icon name="previous" />
          <Icon size="x_large" ml={GRID.GET(3)} mr={GRID.GET(3)} name="play" />
          <Icon name="next" />
        </Flex>
        <Icon name="repeat" />
      </Flex>
      <Flex alignItems="center">
        <Text size="x_small" color={COLORS.DARK_500}>
          {transformSecondsToTimeframe(current)}
        </Text>
        <ProgressBar progress={50} ml={GRID.GET(3)} mr={GRID.GET(3)} />
        <Text size="x_small" color={COLORS.DARK_500}>
          {transformSecondsToTimeframe(duration)}
        </Text>
      </Flex>
    </Flex>
  );
}

PlayerControls.propTypes = {
  current: PropTypes.number,
  duration: PropTypes.number,
};

export default PlayerControls;
