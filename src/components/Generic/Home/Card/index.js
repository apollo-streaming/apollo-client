import React from 'react';
import * as PropTypes from 'prop-types';
import styled from 'styled-components';
import { rgba } from 'polished';

import COLORS from '../../../../design-system/COLORS';
import GRID from '../../../../design-system/GRID';
import Icon from '../../../../design-system/Icon';
import Flex from '../../../../design-system/Flex';
import { Text } from '../../../../design-system/Typography';
import { limitCharacters } from '../../../../utils/functional';
import Link from '../../../../design-system/Link';

function getWidthDifference(first, second) {
  const firstNum = first.split('px')[0];
  const secondNum = second.split('px')[0];

  return `${firstNum - secondNum}px`;
}

const Card = styled.div`
  height: ${({ height }) => height || 'unset'};
  width: ${({ height, width, squared }) =>
    squared ? height : width || 'unset'};
  background-image: ${({ bgImage }) => `linear-gradient(
      to bottom,
      ${rgba(COLORS.GRAY_100, 0.4)},
      ${rgba(COLORS.DARK_900, 0.8)}
    ),
    url(${bgImage})`};
  background-size: cover;
  background-position: center;
  border-radius: ${GRID.GET(1)};
  position: relative;

  & > [role='definition'] {
    position: absolute;
    bottom: ${({ squared }) => (squared ? GRID.GET(2) : GRID.GET(3))};
    left: ${GRID.GET(2)};
  }
`;

function ListCard({
  displayLikedBtn,
  liked,
  title,
  subtitle,
  titleMaxSize,
  subtitleMaxSize,
  bgImage,
  squared = false,
  height,
  width = height,
  link,
  onTitleClick,
}) {
  return (
    <Card bgImage={bgImage} {...{ squared, width, height }}>
      {displayLikedBtn && (
        <Icon name={liked ? 'filled-heart' : 'empty-heart'} />
      )}

      <Flex direction="column" role="definition">
        {link ? (
          <Link
            label={
              titleMaxSize ? limitCharacters(title, titleMaxSize, true) : title
            }
            to={link}
            labelProperties={{
              maxWidth: getWidthDifference(width, GRID.GET(4)),
              color: COLORS.CLEAR_100,
              weight: 'bold',
              alt: title,
            }}
          />
        ) : onTitleClick ? (
          <Text
            pointer
            maxWidth={getWidthDifference(width, GRID.GET(4))}
            color={COLORS.CLEAR_100}
            weight="bold"
            alt={title}
            onClick={onTitleClick}
          >
            {titleMaxSize ? limitCharacters(title, titleMaxSize, true) : title}
          </Text>
        ) : (
          <Text
            maxWidth={getWidthDifference(width, GRID.GET(4))}
            color={COLORS.CLEAR_100}
            weight="bold"
            alt={title}
          >
            {titleMaxSize ? limitCharacters(title, titleMaxSize, true) : title}
          </Text>
        )}
        {subtitle && (
          <Text
            maxWidth={getWidthDifference(width, GRID.GET(4))}
            color={COLORS.CLEAR_100}
            size="x_small"
            alt={subtitle}
          >
            {subtitleMaxSize
              ? limitCharacters(subtitle, subtitleMaxSize, true)
              : subtitle}
          </Text>
        )}
      </Flex>
    </Card>
  );
}

ListCard.propTypes = {
  displayLikedBtn: PropTypes.bool,
  liked: PropTypes.bool,
  link: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  bgImage: PropTypes.string,
  squared: PropTypes.bool,
  width: PropTypes.string,
  height: PropTypes.string,
  titleMaxSize: PropTypes.number,
  subtitleMaxSize: PropTypes.number,
  onTitleClick: PropTypes.func,
};

export default ListCard;
