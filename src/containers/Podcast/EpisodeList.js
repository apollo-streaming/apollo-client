import React from 'react';
import * as PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import EpisodeListComponent from '../../components/Podcast/EpisodeList/index';
import * as PlayerActions from '../../store/modules/player/actions';

function EpisodeList({ episodes, podcast }) {
  const dispatch = useDispatch();

  const onPlayEpisode = (episode) => {
    dispatch(PlayerActions.setActive(dispatch, episode));
    // @TODO Include dispatch action
  };

  const episodeList = episodes.map((ep) => ({
    ...ep,
    onClick: () => onPlayEpisode({ ...ep, podcast }),
  }));

  return <EpisodeListComponent items={episodeList} podcast={podcast} />;
}

EpisodeList.propTypes = {
  // eslint-disable-next-line
  episodes: PropTypes.array,
  // eslint-disable-next-line
  podcast: PropTypes.object,
};

export default EpisodeList;
