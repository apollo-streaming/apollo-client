import React, { useEffect, useState, useRef } from 'react';
import { useDispatch } from 'react-redux';

import PlayerComponent from '../../components/Player';
import * as PlayerActions from '../../store/modules/player/actions';
import {
  useCurrentTimeInPlayer,
  useCurrentEpisode,
  useIsPlaying,
  useStartedPlaying,
} from '../../store/modules/player/selectors';

function Player() {
  const audioRef = useRef();
  const [timeInterval, setTimeInterval] = useState(0);
  const dispatch = useDispatch();
  const isPlaying = useIsPlaying();
  const startedPlaying = useStartedPlaying();
  const current = useCurrentTimeInPlayer();
  const episode = useCurrentEpisode();
  const shouldKeepUpdating = episode ? current < episode.duration : false;

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

  useEffect(() => {
    console.log('===========================');
    console.log({ startedPlaying, isPlaying });
    console.log('===========================');
    if (isPlaying && !startedPlaying) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
      dispatch(PlayerActions.setStartedPlaying(true));
    }
  }, [isPlaying, startedPlaying]);

  if (!isPlaying && timeInterval) {
    clearInterval(timeInterval);
  }

  const onPlay = () => {
    dispatch(PlayerActions.togglePlay(dispatch, isPlaying));
    console.log({ audioRef });
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
  };

  return (
    episode && (
      <>
        <PlayerComponent
          episodeInfo={{ ...episode, current }}
          onPlay={onPlay}
          isPlaying={isPlaying}
        />
        <audio
          ref={audioRef}
          src="https://nerdcast-cdn.jovemnerd.com.br/nerdcast_549_RPG_cthulhu_1.mp3"
        />
      </>
    )
  );
}

export default Player;
