import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import history from '../services/history';

import * as SidebarActions from '../store/modules/sidebar/actions';
import SidebarComponent from '../components/Sidebar';
import {
  useCurrentState,
  useIsSidebarOpened,
} from '../store/modules/sidebar/selectors';
import { useCurrentEpisode } from '../store/modules/player/selectors';
import { useGetRecentlyPlayed } from '../store/modules/episode/selectors';
import { useUsername } from '../store/modules/auth/selectors';

function Sidebar() {
  const dispatch = useDispatch();
  const [commentary, setCommentary] = useState('');
  const state = useCurrentState();
  const isOpened = useIsSidebarOpened();
  const currentEpisode = useCurrentEpisode();
  const aboutEpisode = { ...currentEpisode, commentary, setCommentary };
  const recentlyPlayed = useGetRecentlyPlayed();
  const username = useUsername();

  let shouldRenderLogo = false;

  useEffect(() => {
    if (username) {
      dispatch(SidebarActions.toggle(true));
    }
  }, []);

  if (state === 'signIn' || state === 'signUp') {
    shouldRenderLogo = true;
  }

  const onGoBack = () => {
    history.goBack();
  };

  const onLogoClick = () => {
    dispatch(SidebarActions.toggle(false));
    dispatch(SidebarActions.changeState('displayRecentlyPlayed'));
    history.push('/');
  };

  return (
    <>
      {isOpened && (
        <SidebarComponent
          {...{
            shouldRenderLogo,
            signIn: state === 'signIn',
            signUp: state === 'signUp',
            onLogoClick,
            onGoBack,
          }}
          username={username}
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
