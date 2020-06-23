import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import RecommendedComponent from '../components/Recommended';
import { useGetRecommendedPodcasts } from '../store/modules/podcast/selectors';
import * as PodcastActions from '../store/modules/podcast/actions';

function Recommended() {
  const dispatch = useDispatch();
  const recommended = useGetRecommendedPodcasts();

  useEffect(() => {
    dispatch(PodcastActions.requestRecommended());
  }, []);

  console.log(recommended);

  return (
    <>
      {!!recommended && !!recommended.length && (
        <RecommendedComponent recommended={recommended} />
      )}
    </>
  );
}

export default Recommended;
