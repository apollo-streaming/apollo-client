import React from 'react';
import * as PropTypes from 'prop-types';
import styled from 'styled-components';

import { Text } from '../../../../design-system/Typography';
import COLORS from '../../../../design-system/COLORS';
import Icon from '../../../../design-system/Icon';
import { transformSecondsToTimeframe } from '../../../../utils/functional';
import GRID from '../../../../design-system/GRID';
import Flex from '../../../../design-system/Flex';

const EpisodeBanner = styled.div`
  height: ${GRID.GET(8)};
  width: ${GRID.GET(8)};
  border-radius: ${GRID.GET(1)};
  background-image: ${({ src }) => `url(${src})`};
  background-size: cover;
`;

function Card({ image, podcast, title, stoppedAt, duration }) {
  return (
    <Flex>
      <EpisodeBanner src={image} />

      <Flex ml={GRID.GET(3)} direction="column">
        <Text color={COLORS.DARK_900} weight="bold" size="large">
          {podcast}
        </Text>
        <Text
          mt={GRID.GET(1)}
          color={COLORS.DARK_500}
          weight="semibold"
          size="x_small"
        >
          {title}
        </Text>
        <Flex mt={GRID.GET(1)}>
          <Icon name="clock" size="x_small" />
          <Text ml={GRID.GET(1)} color={COLORS.DARK_500} size="x_small">
            {transformSecondsToTimeframe(stoppedAt)}/
            {transformSecondsToTimeframe(duration)}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}

Card.propTypes = {
  image: PropTypes.string,
  podcast: PropTypes.string,
  title: PropTypes.string,
  stoppedAt: PropTypes.number,
  duration: PropTypes.number,
};

export default Card;
