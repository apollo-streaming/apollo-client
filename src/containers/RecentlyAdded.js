import React from 'react';

import RecentlyAddedComponent from '../components/RecentlyAdded';
import { useGetRecentlyAddedPodcasts } from '../store/modules/podcast/selectors';

function RecentlyAdded() {
  const recentlyAdded = useGetRecentlyAddedPodcasts();

  return (
    <>
      {!!recentlyAdded.length && (
        <RecentlyAddedComponent addedItems={recentlyAdded} />
      )}
    </>
  );
}

export default RecentlyAdded;
