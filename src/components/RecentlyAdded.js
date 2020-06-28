import React from 'react';
import * as PropTypes from 'prop-types';

import HomeList from './Generic/Home/List';
import GRID from '../design-system/GRID';

function RecentlyAdded({ addedItems, onItemClick }) {
  const items = addedItems.map((item) => {
    const { link, ...filteredItem } = item;

    return {
      ...filteredItem,
      image: item.banner,
      onTitleClick: () => onItemClick({ ...item, image: item.banner }),
    };
  });

  return (
    <HomeList
      squaredCards
      cardDimensions={{ height: GRID.GET(20) }}
      items={items}
      label="Novos lançamentos"
      titleMaxSize={14}
      subtitleMaxSize={24}
    />
  );
}

RecentlyAdded.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  addedItems: PropTypes.array,
  onItemClick: PropTypes.func,
};

export default RecentlyAdded;
