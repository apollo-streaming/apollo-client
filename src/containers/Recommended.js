import React from 'react';

import RecommendedComponent from '../components/Recommended';
import { useGetRecommendedPodcasts } from '../store/modules/podcast/selectors';

function Recommended() {
  const recommended = useGetRecommendedPodcasts();

  return (
    <>
      {!!recommended.length && (
        <RecommendedComponent recommended={recommended} />
      )}
    </>
  );
}

export default Recommended;
