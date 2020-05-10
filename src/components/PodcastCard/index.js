import React from 'react';
import PropTypes from 'prop-types';

import Flex from '../../design-system/Flex';
import { Text } from '../../design-system/Typography';
import { Thumbnail } from './styles';
import COLORS from '../../design-system/COLORS';

function PodcastCard({ src, podcast }) {
  return (
    <Flex flexDirection="column">
      <Thumbnail src={src} alt={podcast} />
      <Text color={COLORS.CLEAR_100} textAlign="center">
        {podcast}
      </Text>
    </Flex>
  );
}

PodcastCard.propTypes = {
  src: PropTypes.string,
  podcast: PropTypes.string,
};

export default PodcastCard;
