import React from 'react';

import RecommendedComponent from '../components/Recommended';

const STATIC_RECOMMENDED_ITEMS = [
  {
    image: 'https://upload.wikimedia.org/wikipedia/pt/7/78/Nerdcast_-_2006.jpg',
    title: 'Nerdcast',
    subtitle: 'O Nerdcast completou 10 anos em 2016',
  },
  {
    image: 'https://i4.sndcdn.com/avatars-000314071007-g4fkke-t500x500.jpg',
    title: 'Diagrama',
    subtitle: 'Diagrama é um podcast sobre design',
  },
];

function Recommended() {
  const items = STATIC_RECOMMENDED_ITEMS;
  return <RecommendedComponent recommended={items} />;
}

export default Recommended;
