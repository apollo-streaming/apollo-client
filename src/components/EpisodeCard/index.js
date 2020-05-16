import React from 'react';
import PropTypes from 'prop-types';

import Flex from '../../design-system/Flex';
import { Text } from '../../design-system/Typography';
import { Thumbnail } from './styles';
import COLORS from '../../design-system/COLORS';

function EpisodeCard({ banner, title, description = '' }) {
  return (
    <Flex flexDirection="column">
      <Thumbnail src={banner} alt={title} />
      <Text color={COLORS.CLEAR_100} mb="2px">
        {title}
      </Text>
      <Text color={COLORS.DARK_300} size="x_small">
        {description}
      </Text>
    </Flex>
  );
}

EpisodeCard.propTypes = {
  banner: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default EpisodeCard;
