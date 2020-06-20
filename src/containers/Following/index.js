import React from 'react';

import FollowingComponent from '../../components/Following';
import { useGetFollowing } from '../../store/modules/podcast/selectors';

function Following() {
  const following = useGetFollowing();

  return <FollowingComponent {...{ following }} />;
}

export default Following;
