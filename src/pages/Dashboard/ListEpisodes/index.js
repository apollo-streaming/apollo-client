import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ListEpisodesWrapper } from './styles';
import * as Typography from '../../../design-system/Typography';
import List from '../../../components/List';
import EpisodeListItem from '../../../components/EpisodeListItem';
import COLORS from '../../../design-system/COLORS';
import { requestPopularEpisodes } from '../../../store/modules/episodes/actions';

function ListEpisodes() {
  const dispatch = useDispatch();
  dispatch(requestPopularEpisodes());

  const episodes = useSelector((state) => state.episodes.items);

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
