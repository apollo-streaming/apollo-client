import React from 'react';
import * as PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { SidebarContainer } from './styles';
import SidebarControls from './SidebarControls';
import RecentlyPlayed from './Content/RecentlyPlayed';
import AboutEpisode from './Content/AboutEpisode';
import Logo from '../Generic/Logo';
import SignIn from '../SignIn/Form';
import SignUp from '../SignUp/Form';
import * as AuthActions from '../../store/modules/auth/actions';

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
  const dispatch = useDispatch();
  const onSignUp = (e) => {
    e.preventDefault();

    const { target } = e;

    const data = {
      email: target.email.value,
      name: target.name.value,
      password: target.password.value,
    };

    dispatch(AuthActions.signupRequest(data));
  };

  const onSignIn = (e) => {
    e.preventDefault();

    const { target } = e;

    const data = {
      email: target.email.value,
      password: target.password.value,
    };

    dispatch(AuthActions.signinRequest(data));
  };

  return (
    <SidebarContainer
      {...{ shouldRenderLogo }}
      shouldHavePb={!Object.keys(aboutEpisode).length}
    >
      {!shouldRenderLogo && (
        <SidebarControls username={username} onGoBack={onGoBack} />
      )}
      {shouldRenderLogo && <Logo onClick={onLogoClick} noAction />}
      {!shouldRenderLogo &&
        !!recentlyPlayed &&
        !Object.keys(aboutEpisode).length && (
          <RecentlyPlayed items={recentlyPlayed} />
        )}
      {!shouldRenderLogo && !!Object.keys(aboutEpisode).length && (
        <AboutEpisode {...aboutEpisode} />
      )}
      {signIn && <SignIn onSubmit={onSignIn} />}
      {signUp && <SignUp onSubmit={onSignUp} />}
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
