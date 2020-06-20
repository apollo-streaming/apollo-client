import React from 'react';
import * as PropTypes from 'prop-types';

import Toggle from '../../../design-system/Toggle';
import Link from '../../../design-system/Link';
import Card from '../../Generic/Sidebar/Card';

function RecentlyPlayed({ items }) {
  return (
    <>
      {!!items.length && (
        <Toggle label="Ouvidos recentemente" open>
          {items.map((item) => (
            <Card {...item} />
          ))}
        </Toggle>
      )}
      {/* <Link to="/following" label="Seus Favoritos" /> */}
      <Link icon to="/following" label="Artistas que sigo" />
      <Link icon to="/playlists" label="Minhas Playlists" />
    </>
  );
}

RecentlyPlayed.propTypes = {
  // eslint-disable-next-line
  items: PropTypes.array,
};

export default RecentlyPlayed;
