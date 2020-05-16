import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { HomeWrapper } from './styles';
import { H1 } from '../../design-system/Typography';
import COLORS from '../../design-system/COLORS';

import PodcastCard from '../../components/PodcastCard';
import EpisodeCard from '../../components/EpisodeCard';
import ScrollableList from '../../components/ScrollableList';
import { requestPopularPodcasts } from '../../store/modules/podcasts/actions';
import { requestPopularEpisodes } from '../../store/modules/episodes/actions';

function Home() {
  const dispatch = useDispatch();

  const podcasts = useSelector((state) => state.podcasts.items);
  const episodes = useSelector((state) => state.episodes.items);

  useEffect(() => {
    dispatch(requestPopularPodcasts());
    dispatch(requestPopularEpisodes());
  }, [dispatch]);

  return (
    <HomeWrapper>
      <H1 color={COLORS.CLEAR_100} weight="bold" mb="12px">
        Episódios populares
      </H1>
      <ScrollableList>
        {episodes.map((item) => (
          <EpisodeCard key={item.src} {...item} />
        ))}
      </ScrollableList>
      <H1 color={COLORS.CLEAR_100} weight="bold" mt="60px" mb="12px">
        Podcasts populares
      </H1>
      <ScrollableList>
        {podcasts.map((item) => (
          <PodcastCard key={item.name} {...item} />
        ))}
      </ScrollableList>
    </HomeWrapper>
  );
}

export default Home;
