import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as PropTypes from 'prop-types';

import HeadlineComponent from '../../components/Podcast/Headline';
import * as PodcastActions from '../../store/modules/podcast/actions';
import { useJWT } from '../../store/modules/auth/selectors';

import { useGetFollowing } from '../../store/modules/podcast/selectors';

function Headline({ podcast }) {
  const dispatch = useDispatch();
  const jwt = useJWT();
  const following = useGetFollowing();
  const [shouldDisplayFollowButton, setShouldDisplayFollowButton] = useState(
    true
  );

  useEffect(() => {
    dispatch(PodcastActions.requestFollowing(jwt));
    setShouldDisplayFollowButton(true);

    following.forEach(({ id }) => {
      if (id === podcast.id) {
        setShouldDisplayFollowButton(false);
      }
    });
  }, [following]);

  const onFollow = () => {
    dispatch(PodcastActions.followOrUnfollow(podcast.id, jwt));
  };

  return (
    <HeadlineComponent
      {...podcast}
      onFollow={onFollow}
      shouldDisplayFollowButton={shouldDisplayFollowButton}
    />
  );
}

Headline.propTypes = {
  // eslint-disable-next-line
  podcast: PropTypes.object,
};

export default Headline;
