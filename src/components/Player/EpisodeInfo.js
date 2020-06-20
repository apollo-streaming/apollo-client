import React from 'react';
import * as PropTypes from 'prop-types';
import styled from 'styled-components';

import Flex from '../../design-system/Flex';
import { Text } from '../../design-system/Typography';
import GRID from '../../design-system/GRID';
import COLORS from '../../design-system/COLORS';

const Image = styled.div`
  background-image: ${({ src }) => `url(${src})`};
  background-size: cover;
  background-position: center;
  border-radius: ${GRID.GET(1)};
  height: ${GRID.GET(8)};
  width: ${GRID.GET(8)};
  margin-right: ${GRID.GET(3)};
`;

function EpisodeInfo({ image, podcast, episode }) {
  return (
    <Flex>
      <Image src={image} />
      <Flex direction="column" justifyContent="center">
        <Text size="large" weight="bold" mb={GRID.GET(1)}>
          {podcast}
        </Text>
        <Text size="x_small" color={COLORS.DARK_500}>
          {episode}
        </Text>
      </Flex>
    </Flex>
  );
}

EpisodeInfo.propTypes = {
  image: PropTypes.string,
  podcast: PropTypes.string,
  episode: PropTypes.string,
};

export default EpisodeInfo;
