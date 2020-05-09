import React from 'react';
import PropTypes from 'prop-types';

import Flex from '../../design-system/Flex';
import { Text } from '../../design-system/Typography';
import { Thumbnail } from './styles';
import COLORS from '../../design-system/COLORS';

function ArtistCard({ src, artist }) {
  return (
    <Flex flexDirection="column">
      <Thumbnail src={src} alt={artist} />
      <Text color={COLORS.CLEAR_100} textAlign="center">
        {artist}
      </Text>
    </Flex>
  );
}

ArtistCard.propTypes = {
  src: PropTypes.string,
  artist: PropTypes.string,
};

export default ArtistCard;
