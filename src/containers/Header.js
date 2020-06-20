import React from 'react';

import HeaderComponent from '../components/Header';
import { useCurrentState } from '../store/modules/sidebar/selectors';

function Header() {
  const sidebarState = useCurrentState();
  let displayLogo = true;

  if (sidebarState === 'signIn' || sidebarState === 'signUp') {
    displayLogo = false;
  }

  return <HeaderComponent {...{ displayLogo }} />;
}

export default Header;
