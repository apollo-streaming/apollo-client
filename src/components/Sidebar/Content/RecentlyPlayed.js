import React from 'react';
import * as PropTypes from 'prop-types';

import Toggle from '../../../design-system/Toggle';
import Link from '../../../design-system/Link';
import Card from '../../Generic/Sidebar/Card';

function RecentlyPlayed({ items }) {
  return (
    <>
      <Toggle label="Ouvidos recentemente" open>
        {items.map((item) => (
          <Card {...item} />
        ))}
      </Toggle>
      <Link to="/" label="Seus Favoritos" />
      <Link to="/" label="Artistas que sigo" />
      <Link to="/" label="Minhas Playlists" />
    </>
  );
}

RecentlyPlayed.propTypes = {
  // eslint-disable-next-line
  items: PropTypes.array,
};

export default RecentlyPlayed;
