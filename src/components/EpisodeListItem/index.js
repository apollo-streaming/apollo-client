import React from 'react';
import PropTypes from 'prop-types';

import Flex from '../../design-system/Flex';
import { Text } from '../../design-system/Typography';
import { Thumbnail } from './styles';
import COLORS from '../../design-system/COLORS';

function EpisodeListItem({ banner, title }) {
  return (
    <Flex>
      <Thumbnail src={banner} alt={title} />
      <Text color={COLORS.CLEAR_100} ml="16px">
        {title}
      </Text>
    </Flex>
  );
}

EpisodeListItem.propTypes = {
  banner: PropTypes.string,
  title: PropTypes.string,
};

export default EpisodeListItem;
