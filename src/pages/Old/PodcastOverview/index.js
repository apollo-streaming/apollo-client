import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { searchFromText } from '../../store/modules/search/actions';
import * as Typography from '../../design-system/Typography';
import COLORS from '../../design-system/COLORS';
import { PodcastOverviewWrapper, Image } from './styles';
import List from '../../components/List';
import EpisodeListItem from '../../components/EpisodeListItem';
import Flex from '../../design-system/Flex';

function PodcastOverview() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const podcast = useSelector((state) => state.search.items[0]);

  console.log(podcast);

  useEffect(() => {
    dispatch(searchFromText(id));
  }, [dispatch, id]);

  return (
    <PodcastOverviewWrapper>
      {podcast && (
        <>
          <Flex style={{ marginBottom: '72px' }}>
            <Image src="https://cdn.last.fm/flatness/responsive/2/noimage/default_album_300_g4.png" />
            <Typography.H1
              weight="bold"
              size="xx_large"
              ml="48px"
              color={COLORS.CLEAR_100}
            >
              {podcast.name}
            </Typography.H1>
          </Flex>
          <Typography.H2 weight="semibold" mb="16px" color={COLORS.CLEAR_100}>
            Episódios
          </Typography.H2>
          <List>
            {podcast.episodes.map((item) => (
              <EpisodeListItem {...item} width="100%" />
            ))}
          </List>
        </>
      )}
    </PodcastOverviewWrapper>
  );
}

export default PodcastOverview;
