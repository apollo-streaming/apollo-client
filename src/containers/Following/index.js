import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import FollowingComponent from '../../components/Following';
import * as PodcastActions from '../../store/modules/podcast/actions';
import { useGetFollowing } from '../../store/modules/podcast/selectors';
import { useJWT } from '../../store/modules/auth/selectors';

function Following() {
  const dispatch = useDispatch();
  const jwt = useJWT();
  const following = useGetFollowing();

  useEffect(() => {
    dispatch(PodcastActions.requestFollowing(jwt));
  }, []);

  return <FollowingComponent {...{ following }} />;
}

export default Following;
