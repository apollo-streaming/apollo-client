import React from 'react';
import * as PropTypes from 'prop-types';
import styled from 'styled-components';
import { rgba } from 'polished';

import COLORS from '../../design-system/COLORS';
import GRID from '../../design-system/GRID';
import { H1, Text } from '../../design-system/Typography';
import Flex from '../../design-system/Flex';
import Button from '../../design-system/Button';

const HeadlineContainer = styled(Flex)`
  background-image: ${({ bg }) => `linear-gradient(
      to bottom,
      ${rgba(COLORS.DARK_900, 0.5)},
      ${rgba(COLORS.DARK_900, 0.5)}
    ), url(${bg})`};
  background-size: cover;
  background-position: top;
  height: ${GRID.GET(22)};
  height: 320px;
  position: absolute;
  top: 0;
  width: calc(100% - 464px);
  left: 0;
  z-index: -1;
  padding-top: ${GRID.GET(16)};
  padding-left: ${GRID.GET(10)};
  padding-bottom: ${GRID.GET(3)};

  & > ${Flex} {
  }
`;

function Headline({ image, podcast }) {
  return (
    <HeadlineContainer bg={image}>
      <Flex direction="column" justifyContent="flex-end">
        <H1
          size="x_large"
          weight="bold"
          color={COLORS.CLEAR_100}
          mb={GRID.GET(1)}
        >
          {podcast}
        </H1>
        <Flex>
          <Button pointer secondary>
            <Text weight="bold" size="small" color={COLORS.YELLOW_300}>
              Seguir
            </Text>
          </Button>
          <Button pointer primary ml={GRID.GET(2)}>
            <Text weight="bold" size="small" color={COLORS.DARK_900}>
              Apadrinhar
            </Text>
          </Button>
        </Flex>
      </Flex>
    </HeadlineContainer>
  );
}

Headline.propTypes = {
  image: PropTypes.string,
  podcast: PropTypes.string,
  // id: PropTypes.number,
};

export default Headline;
