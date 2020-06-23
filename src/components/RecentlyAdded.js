import React from 'react';
import * as PropTypes from 'prop-types';

import HomeList from './Generic/Home/List';
import GRID from '../design-system/GRID';

function RecentlyAdded({ addedItems }) {
  const items = addedItems.map((item) => ({ ...item, image: item.banner }));

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
};

export default RecentlyAdded;
