import React from 'react';
import * as PropTypes from 'prop-types';

import { SidebarContainer } from './styles';
import SidebarControls from './SidebarControls';
import RecentlyPlayed from './Content/RecentlyPlayed';
import AboutEpisode from './Content/AboutEpisode';

function Sidebar({
  username,
  onClose,
  recentlyPlayed = [],
  aboutEpisode = {},
}) {
  return (
    <SidebarContainer shouldHavePb={!Object.keys(aboutEpisode).length}>
      <SidebarControls username={username} onClose={onClose} />
      {!!recentlyPlayed.length && <RecentlyPlayed items={recentlyPlayed} />}
      {!!Object.keys(aboutEpisode).length && <AboutEpisode {...aboutEpisode} />}
    </SidebarContainer>
  );
}

Sidebar.propTypes = {
  username: PropTypes.string,
  onClose: PropTypes.func,
  // eslint-disable-next-line
  recentlyPlayed: PropTypes.array,
  // eslint-disable-next-line
  aboutEpisode: PropTypes.object,
};

export default Sidebar;
