import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import RecentlyAddedComponent from '../components/RecentlyAdded';
import * as PodcastActions from '../store/modules/podcast/actions';
import { useGetRecentlyAddedPodcasts } from '../store/modules/podcast/selectors';

function RecentlyAdded() {
  const dispatch = useDispatch();
  const recentlyAdded = useGetRecentlyAddedPodcasts();

  useEffect(() => {
    dispatch(PodcastActions.requestRecentlyAdded());
  }, []);

  return (
    <>
      {!!recentlyAdded.length && (
        <RecentlyAddedComponent addedItems={recentlyAdded} />
      )}
    </>
  );
}

export default RecentlyAdded;
