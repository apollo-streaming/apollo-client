import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import SignInComponent from '../../components/SignIn';
import * as SidebarActions from '../../store/modules/sidebar/actions';

function SignIn() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(SidebarActions.changeState('signIn'));
    dispatch(SidebarActions.toggle());
  }, []);
  return <SignInComponent />;
}

export default SignIn;
