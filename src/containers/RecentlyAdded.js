import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import RecentlyAddedComponent from '../components/RecentlyAdded';
import * as PlayerActions from '../store/modules/player/actions';
import * as PodcastActions from '../store/modules/podcast/actions';
import { useGetRecentlyAddedPodcasts } from '../store/modules/podcast/selectors';

function RecentlyAdded() {
  const dispatch = useDispatch();
  const recentlyAdded = useGetRecentlyAddedPodcasts();

  useEffect(() => {
    dispatch(PodcastActions.requestRecentlyAdded());
  }, []);

  const onItemClick = (episode) => {
    dispatch(PlayerActions.setActive(dispatch, episode));
  };

  return (
    <>
      {!!recentlyAdded.length && (
        <RecentlyAddedComponent
          addedItems={recentlyAdded}
          onItemClick={onItemClick}
        />
      )}
    </>
  );
}

export default RecentlyAdded;
