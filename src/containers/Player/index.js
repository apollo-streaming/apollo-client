import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';

import PlayerComponent from '../../components/Player';
import * as PlayerActions from '../../store/modules/player/actions';
import {
  useCurrentTimeInPlayer,
  useCurrentEpisode,
  useIsPlaying,
  useStartedPlaying,
  useIntervalID,
} from '../../store/modules/player/selectors';
import { useJWT } from '../../store/modules/auth/selectors';

function Player() {
  const jwt = useJWT();
  const audioRef = useRef();
  const dispatch = useDispatch();
  const isPlaying = useIsPlaying();
  const startedPlaying = useStartedPlaying();
  const playerIntervalID = useIntervalID();
  const current = useCurrentTimeInPlayer();
  const episode = useCurrentEpisode();
  const shouldKeepUpdating = episode ? current < episode.duration : !isPlaying;

  // Updates the current time
  useEffect(() => {
    if (!shouldKeepUpdating) {
      clearInterval(playerIntervalID);
      dispatch(PlayerActions.setIntervalID(null));
    } else if (isPlaying && !playerIntervalID) {
      const intervalID = setInterval(() => {
        if (isPlaying && shouldKeepUpdating) {
          dispatch(PlayerActions.incrementCurrentTime());
          dispatch(PlayerActions.addToHistory(current, episode.id, jwt));
        }
      }, 1000);
      dispatch(PlayerActions.setIntervalID(intervalID));
    }
  }, [isPlaying, shouldKeepUpdating, dispatch]);

  // Resets the timer when a new podcast's in
  useEffect(() => {
    if (isPlaying && !startedPlaying) {
      audioRef.current.currentTime = episode.stoppedAt ? episode.stoppedAt : 0;
      audioRef.current.play();
      dispatch(PlayerActions.setStartedPlaying(true));
    }
  }, [isPlaying, startedPlaying]);

  // Makes sure that the player doesn't lose track of the time
  useEffect(() => {
    if (isPlaying) {
      if (Math.abs(Math.floor(audioRef.current.currentTime) - current) > 1) {
        audioRef.current.currentTime = current;
      }
    }
  }, [current]);

  // Stops the timer from increasing when the player is paused
  if (!isPlaying && playerIntervalID) {
    dispatch(PlayerActions.setIntervalID(null));
    clearInterval(playerIntervalID);
  }

  const onPlay = () => {
    dispatch(PlayerActions.togglePlay(dispatch, isPlaying));

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
        {/* eslint-disable-next-line */}
        <audio ref={audioRef} src={episode.link} />
      </>
    )
  );
}

export default Player;
