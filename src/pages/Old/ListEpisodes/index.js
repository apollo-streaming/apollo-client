import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ListEpisodesWrapper } from './styles';
import * as Typography from '../../../design-system/Typography';
import List from '../../../components/List';
import EpisodeListItem from '../../../components/EpisodeListItem';
import COLORS from '../../../design-system/COLORS';
import { requestEpisodes } from '../../../store/modules/episodes/actions';

function ListEpisodes() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestEpisodes(5));
  }, []);

  const episodes = useSelector((state) => state.episodes.items);
  console.log(episodes);

  return (
    <ListEpisodesWrapper flexDirection="column">
      <Typography.H1 color={COLORS.CLEAR_100} weight="semibold" mb="16px">
        {!episodes.length
          ? 'Você ainda não possui episódios lançados :('
          : 'Episódios'}
      </Typography.H1>
      {episodes.length && (
        <List>
          {episodes.map((episode) => (
            <EpisodeListItem {...episode} adminView width="100%" />
          ))}
        </List>
      )}
    </ListEpisodesWrapper>
  );
}

export default ListEpisodes;
