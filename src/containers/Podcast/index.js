import React, { useEffect } from 'react';

import Headline from './Headline';
import EpisodeList from './EpisodeList';
import { useGetCurrentPodcast } from '../../store/modules/podcast/selectors';

function Podcast() {
  // const dispatch = useDispatch();
  const podcast = useGetCurrentPodcast();
  console.log({ podcast });

  useEffect(() => {
    // dispatch(PodcastActions.request('displayEpisodeInfo'));
    // dispatch(SidebarActions.changeState('recentlyPlayed'));
  }, []);

  return (
    <>
      <Headline podcast={podcast} />
      <EpisodeList
        episodes={podcast ? podcast.episodes : []}
        podcast={podcast ? podcast.podcast : ''}
      />
    </>
  );
}

export default Podcast;
