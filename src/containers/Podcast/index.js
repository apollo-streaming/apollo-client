import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Headline from './Headline';
import EpisodeList from './EpisodeList';
import * as PodcastActions from '../../store/modules/podcast/actions';
import { useGetCurrentPodcast } from '../../store/modules/podcast/selectors';
import { transformQueryParamsToObject } from '../../utils/functional';

function Podcast() {
  const dispatch = useDispatch();
  const podcast = useGetCurrentPodcast();
  const queryParams = transformQueryParamsToObject(window.location.search);

  useEffect(() => {
    dispatch(PodcastActions.request(queryParams.q));
  }, []);

  return (
    <>
      <Headline podcast={podcast} />
      <EpisodeList
        episodes={podcast && !!podcast.episodes ? podcast.episodes : []}
        podcast={podcast && !!podcast.name ? podcast.name : ''}
      />
    </>
  );
}

export default Podcast;
