import React from 'react';

import FollowingComponent from '../../components/Following';

const STATIC_FOLLOWING = [
  {
    image: 'https://upload.wikimedia.org/wikipedia/pt/7/78/Nerdcast_-_2006.jpg',
    title: 'Nerdcast',
  },
  {
    image: 'https://i4.sndcdn.com/avatars-000314071007-g4fkke-t500x500.jpg',
    title: 'Diagrama',
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/pt/7/78/Nerdcast_-_2006.jpg',
    title: 'Nerdcast',
  },
  {
    image: 'https://i4.sndcdn.com/avatars-000314071007-g4fkke-t500x500.jpg',
    title: 'Diagrama',
  },
];

function Following() {
  const following = STATIC_FOLLOWING;

  return <FollowingComponent {...{ following }} />;
}

export default Following;
