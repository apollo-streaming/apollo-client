import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import Flex from '../../design-system/Flex';
import { Text } from '../../design-system/Typography';
import { Thumbnail } from './styles';
import COLORS from '../../design-system/COLORS';

function EpisodeListItem({
  banner = 'https://cdn.last.fm/flatness/responsive/2/noimage/default_album_300_g4.png',
  name,
  title = '',
  description = '',
}) {
  return name ? (
    <Link
      to={`/podcast/${encodeURIComponent(name)}`}
      style={{ textDecoration: 'none' }}
    >
      <Flex>
        <Thumbnail src={banner} alt={name} />
        <Text color={COLORS.CLEAR_100} ml="16px">
          {name}
        </Text>
      </Flex>
    </Link>
  ) : (
    <Flex>
      <Thumbnail src={banner} alt={title} />
      <Flex flexDirection="column">
        <Text color={COLORS.CLEAR_100} ml="16px" mb="4px">
          {title}
        </Text>
        <Text color={COLORS.CLEAR_100} size="x_small" ml="16px">
          {description}
        </Text>
      </Flex>
    </Flex>
  );
}

EpisodeListItem.propTypes = {
  banner: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
};

export default EpisodeListItem;
