import React from 'react';
import PropTypes from 'prop-types';

import Flex from '../../design-system/Flex';
import { Text } from '../../design-system/Typography';
import { Thumbnail } from './styles';
import COLORS from '../../design-system/COLORS';

function PodcastCard({ src, title, artist }) {
  return (
    <Flex flexDirection="column">
      <Thumbnail src={src} alt={title} />
      <Text color={COLORS.CLEAR_100} mb="2px">
        {title}
      </Text>
      <Text color={COLORS.DARK_300} size="x_small">
        {artist}
      </Text>
    </Flex>
  );
}

PodcastCard.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string,
  artist: PropTypes.string,
};

export default PodcastCard;
