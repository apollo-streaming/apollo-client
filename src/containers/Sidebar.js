import React, { useState } from 'react';
import history from '../services/history';

import SidebarComponent from '../components/Sidebar';
import {
  useCurrentState,
  useIsSidebarOpened,
} from '../store/modules/sidebar/selectors';
import { useCurrentEpisode } from '../store/modules/player/selectors';
import { useGetRecentlyPlayed } from '../store/modules/episode/selectors';

function Sidebar() {
  const [commentary, setCommentary] = useState('');
  const state = useCurrentState();
  const isOpened = useIsSidebarOpened();
  const currentEpisode = useCurrentEpisode();
  const aboutEpisode = { ...currentEpisode, commentary, setCommentary };
  const recentlyPlayed = useGetRecentlyPlayed();

  let shouldRenderLogo = false;

  if (state === 'signIn' || state === 'signUp') {
    shouldRenderLogo = true;
  }

  const onGoBack = () => {
    history.goBack();
  };

  return (
    <>
      {isOpened && (
        <SidebarComponent
          {...{ shouldRenderLogo }}
          username="Thalles Carvalho"
          onGoBack={onGoBack}
          aboutEpisode={state === 'displayEpisodeInfo' ? aboutEpisode : {}}
          recentlyPlayed={
            state === 'displayRecentlyPlayed' ? recentlyPlayed : []
          }
        />
      )}
    </>
  );
}

export default Sidebar;
