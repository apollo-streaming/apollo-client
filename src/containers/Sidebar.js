import React, { useState } from 'react';
import history from '../services/history';

import SidebarComponent from '../components/Sidebar';
import { useCurrentState } from '../store/modules/sidebar/selectors';
import { useCurrentEpisode } from '../store/modules/player/selectors';
import { useGetRecentlyPlayed } from '../store/modules/episode/selectors';

function Sidebar() {
  const [commentary, setCommentary] = useState('');
  const state = useCurrentState();
  const currentEpisode = useCurrentEpisode();
  const aboutEpisode = { ...currentEpisode, commentary, setCommentary };
  const recentlyPlayed = useGetRecentlyPlayed();

  const onGoBack = () => {
    history.goBack();
  };

  return (
    <SidebarComponent
      username="Thalles Carvalho"
      onGoBack={onGoBack}
      aboutEpisode={state === 'displayEpisodeInfo' ? aboutEpisode : {}}
      recentlyPlayed={state === 'displayRecentlyPlayed' ? recentlyPlayed : []}
    />
  );
}

export default Sidebar;
