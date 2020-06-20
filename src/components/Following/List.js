import React from 'react';
import * as PropTypes from 'prop-types';

import HomeList from '../Generic/Home/List';
import GRID from '../../design-system/GRID';

function List({ items }) {
  return (
    <HomeList
      cardDimensions={{ height: GRID.GET(31), width: GRID.GET(25) }}
      items={items}
    />
  );
}

List.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  items: PropTypes.array,
};

export default List;
