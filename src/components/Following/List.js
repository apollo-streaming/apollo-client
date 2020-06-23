import React from 'react';
import * as PropTypes from 'prop-types';

import HomeList from '../Generic/Home/List';
import GRID from '../../design-system/GRID';

function List({ items }) {
  const following = items.map((item) => ({
    ...item,
    title: item.name,
    image: item.banner || item.image,
  }));

  return (
    <HomeList
      cardDimensions={{ height: GRID.GET(31), width: GRID.GET(25) }}
      items={following}
    />
  );
}

List.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  items: PropTypes.array,
};

export default List;
