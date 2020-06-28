import React from 'react';
import * as PropTypes from 'prop-types';

import Flex from '../../../../design-system/Flex';
import { Text } from '../../../../design-system/Typography';
import GRID from '../../../../design-system/GRID';
import List from '../../../../design-system/List';
import ListItem from '../../../../design-system/ListItem';
import ListCard from '../Card';

function HomeList({
  items,
  label,
  squaredCards,
  cardDimensions,
  titleMaxSize,
  subtitleMaxSize,
}) {
  return (
    <Flex direction="column">
      {label && (
        <Text weight="bold" size="x_large" mb={GRID.GET(3)}>
          {label}
        </Text>
      )}
      <List spaceBetween={GRID.GET(2)} horizontal>
        {items.map(
          ({ image, liked = false, title, subtitle, link, onTitleClick }) => (
            <ListItem>
              <ListCard
                bgImage={image}
                displayLikedBtn={!!liked}
                squared={squaredCards}
                key={title}
                {...{
                  ...cardDimensions,
                  titleMaxSize,
                  subtitleMaxSize,
                  title,
                  subtitle,
                  liked,
                  link,
                  onTitleClick,
                }}
              />
            </ListItem>
          )
        )}
      </List>
    </Flex>
  );
}

HomeList.propTypes = {
  // eslint-disable-next-line
  items: PropTypes.array,
  // eslint-disable-next-line
  cardDimensions: PropTypes.object,
  label: PropTypes.string,
  squaredCards: PropTypes.bool,
  titleMaxSize: PropTypes.number,
  subtitleMaxSize: PropTypes.number,
};

export default HomeList;
