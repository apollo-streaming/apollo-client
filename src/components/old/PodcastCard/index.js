import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import Flex from '../../design-system/Flex';
import { Text } from '../../design-system/Typography';
import { Thumbnail } from './styles';
import COLORS from '../../design-system/COLORS';

function PodcastCard({
  src = 'https://cdn.last.fm/flatness/responsive/2/noimage/default_album_300_g4.png',
  name,
}) {
  return (
    <Link
      to={`/podcast/${encodeURIComponent(name)}`}
      style={{ textDecoration: 'none' }}
    >
      <Flex flexDirection="column">
        <Thumbnail src={src} alt={name} />
        <Text color={COLORS.CLEAR_100} textAlign="center">
          {name}
        </Text>
      </Flex>
    </Link>
  );
}

PodcastCard.propTypes = {
  src: PropTypes.string,
  name: PropTypes.string,
};

export default PodcastCard;