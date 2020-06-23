import React from 'react';
import * as PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import EpisodeListComponent from '../../components/Podcast/EpisodeList/index';
import * as PlayerActions from '../../store/modules/player/actions';

function EpisodeList({ episodes, podcast, noLabel = false, height = '100%' }) {
  const dispatch = useDispatch();

  const onPlayEpisode = (episode) => {
    dispatch(PlayerActions.setActive(dispatch, episode));
    // @TODO Include dispatch action
  };

  const episodeList = episodes.map((ep) => ({
    ...ep,
    image: ep.banner || ep.image,
    commentaries: [],
    onClick: () => onPlayEpisode({ ...ep, podcast }),
  }));

  return (
    <EpisodeListComponent
      noLabel={noLabel}
      items={episodeList}
      podcast={podcast}
      height={height}
    />
  );
}

EpisodeList.propTypes = {
  // eslint-disable-next-line
  episodes: PropTypes.array,
  // eslint-disable-next-line
  podcast: PropTypes.object,
  noLabel: PropTypes.bool,
  height: PropTypes.string,
};

export default EpisodeList;
