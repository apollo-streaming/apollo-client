import React from 'react';
import * as PropTypes from 'prop-types';
import styled from 'styled-components';

import Flex from '../../../design-system/Flex';
import { Text } from '../../../design-system/Typography';
import GRID from '../../../design-system/GRID';
import COLORS from '../../../design-system/COLORS';

const Image = styled.div`
  background-image: ${({ src }) => `url(${src})`};
  background-size: cover;
  background-position: center;
  height: ${GRID.GET(8)};
  width: ${GRID.GET(8)};
  border-radius: ${GRID.GET(1)};
`;

function Card({ image, title, description }) {
  return (
    <Flex>
      <Image src={image} />
      <Flex
        direction="column"
        ml={GRID.GET(2)}
        width={`calc(100% - ${GRID.GET(10)})`}
      >
        <Text size="large" weight="bold" mb={GRID.GET(1)}>
          {title}
        </Text>
        <Text size="x_small" color={COLORS.DARK_500}>
          {description}
        </Text>
      </Flex>
    </Flex>
  );
}

Card.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default Card;
