import React from 'react';
import * as PropTypes from 'prop-types';
import styled from 'styled-components';
import { rgba } from 'polished';

import COLORS from '../../design-system/COLORS';
import GRID from '../../design-system/GRID';
import { H1, Text } from '../../design-system/Typography';
import Flex from '../../design-system/Flex';
import Button from '../../design-system/Button';
import { useIsSidebarOpened } from '../../store/modules/sidebar/selectors';

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
  width: ${({ isFullWidth }) => (isFullWidth ? '100%' : 'calc(100% - 464px)')};
  left: 0;
  z-index: -1;
  padding-top: ${GRID.GET(16)};
  padding-left: ${GRID.GET(10)};
  padding-bottom: ${GRID.GET(3)};

  & > ${Flex} {
  }
`;

function Headline({ image, name, onFollow, shouldDisplayFollowButton = true }) {
  const isFullWidth = !useIsSidebarOpened();
  return (
    <HeadlineContainer isFullWidth={isFullWidth} bg={image}>
      <Flex direction="column" justifyContent="flex-end">
        <H1
          size="x_large"
          weight="bold"
          color={COLORS.CLEAR_100}
          mb={GRID.GET(1)}
        >
          {name}
        </H1>
        <Flex>
          <Button pointer secondary onClick={onFollow}>
            <Text weight="bold" size="small" color={COLORS.YELLOW_300}>
              {shouldDisplayFollowButton ? 'Seguir' : 'Deixar de Seguir'}
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
  name: PropTypes.string,
  // id: PropTypes.number,
  onFollow: PropTypes.func,
  shouldDisplayFollowButton: PropTypes.bool,
};

export default Headline;
