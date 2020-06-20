import React from 'react';
import * as PropTypes from 'prop-types';

import { SidebarContainer } from './styles';
import SidebarControls from './SidebarControls';
import RecentlyPlayed from './Content/RecentlyPlayed';
import AboutEpisode from './Content/AboutEpisode';
import Logo from '../Generic/Logo';
import SignIn from '../SignIn/Form';
import SignUp from '../SignUp/Form';

function Sidebar({
  username,
  onGoBack,
  recentlyPlayed = [],
  aboutEpisode = {},
  shouldRenderLogo,
  signIn,
  signUp,
  onLogoClick,
}) {
  return (
    <SidebarContainer
      {...{ shouldRenderLogo }}
      shouldHavePb={!Object.keys(aboutEpisode).length}
    >
      {!shouldRenderLogo && (
        <SidebarControls username={username} onGoBack={onGoBack} />
      )}
      {shouldRenderLogo && <Logo onClick={onLogoClick} noAction />}
      {!shouldRenderLogo && !!recentlyPlayed && (
        <RecentlyPlayed items={recentlyPlayed} />
      )}
      {!shouldRenderLogo && !!Object.keys(aboutEpisode).length && (
        <AboutEpisode {...aboutEpisode} />
      )}
      {signIn && <SignIn />}
      {signUp && <SignUp />}
    </SidebarContainer>
  );
}

Sidebar.propTypes = {
  username: PropTypes.string,
  onGoBack: PropTypes.func,
  // eslint-disable-next-line
  recentlyPlayed: PropTypes.array,
  // eslint-disable-next-line
  aboutEpisode: PropTypes.object,
  shouldRenderLogo: PropTypes.bool,
  signIn: PropTypes.bool,
  signUp: PropTypes.bool,
  onLogoClick: PropTypes.func,
};

export default Sidebar;
