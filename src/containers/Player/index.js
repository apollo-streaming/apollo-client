import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import PlayerComponent from '../../components/Player';
import * as PlayerActions from '../../store/modules/player/actions';
import {
  useCurrentTimeInPlayer,
  useCurrentEpisode,
  useIsPlaying,
} from '../../store/modules/player/selectors';

function Player() {
  const [timeInterval, setTimeInterval] = useState();
  const dispatch = useDispatch();
  const isPlaying = useIsPlaying();
  const current = useCurrentTimeInPlayer();
  const episode = useCurrentEpisode();
  const shouldKeepUpdating = episode ? current < episode.duration : false;
  console.log({ shouldKeepUpdating });

  const onPlay = () => {
    dispatch(PlayerActions.togglePlay(dispatch, isPlaying));
  };

  useEffect(() => {
    if (!shouldKeepUpdating) {
      clearInterval(timeInterval);
    } else {
      setTimeInterval(
        setInterval(() => {
          if (isPlaying && shouldKeepUpdating)
            dispatch(PlayerActions.incrementCurrentTime());
        }, 1000)
      );
    }
  }, [isPlaying, shouldKeepUpdating, dispatch]);

  if (!isPlaying && timeInterval) {
    clearInterval(timeInterval);
  }

  return (
    episode && (
      <PlayerComponent
        episodeInfo={{ ...episode, current }}
        onPlay={onPlay}
        isPlaying={isPlaying}
      />
    )
  );
}

export default Player;
