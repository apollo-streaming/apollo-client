import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import SignUpComponent from '../../components/SignUp';
import * as SidebarActions from '../../store/modules/sidebar/actions';

function SignUp() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(SidebarActions.changeState('signUp'));
    dispatch(SidebarActions.toggle(true));
  }, []);
  return <SignUpComponent />;
}

export default SignUp;
