import React from 'react';
import * as PropTypes from 'prop-types';

import HomeList from './Generic/Home/List';
import GRID from '../design-system/GRID';

function Recommended({ recommended }) {
  const items = recommended.map((item) => ({
    ...item,
    title: item.name,
    image: item.banner || item.image,
    link: `/podcast?q=${item.name}`,
  }));

  return (
    <HomeList
      cardDimensions={{ height: GRID.GET(31), width: GRID.GET(25) }}
      items={items}
      label="Recomendados para você"
      subtitleMaxSize={32}
      titleMaxSize={26}
    />
  );
}

Recommended.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  recommended: PropTypes.array,
};

export default Recommended;
