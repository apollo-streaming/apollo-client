import React from 'react';
import * as PropTypes from 'prop-types';
import styled from 'styled-components';

import COLORS from '../../../../design-system/COLORS';
import GRID from '../../../../design-system/GRID';
import Flex from '../../../../design-system/Flex';
import { Text } from '../../../../design-system/Typography';

const Image = styled.div`
  height: ${GRID.GET(6)};
  width: ${GRID.GET(6)};
  border-radius: 50%;
  background-image: ${({ src }) => `url(${src})`};
  background-size: cover;
  background-position: center;
`;

const TextContainer = styled(Flex)`
  width: ${`calc(100% - ${GRID.GET(8)})`};
  margin-left: ${GRID.GET(2)};
`;

function Card({ name, profilePicture, text, createdAt }) {
  return (
    <Flex alignItems="flex-start">
      <Image src={profilePicture} />
      <TextContainer direction="column">
        <Flex
          mb={GRID.GET(1)}
          justifyContent="space-between"
          alignItems="center"
        >
          <Text weight="bold" color={COLORS.DARK_900}>
            {name}
          </Text>
          <Text size="x_small" color={COLORS.DARK_500}>
            {new Date(createdAt).toLocaleDateString('pt-BR')}
          </Text>
        </Flex>
        <Text color={COLORS.DARK_500}>{text}</Text>
      </TextContainer>
    </Flex>
  );
}

Card.propTypes = {
  profilePicture: PropTypes.string,
  name: PropTypes.string,
  text: PropTypes.string,
  createdAt: PropTypes.string,
};

export default Card;
