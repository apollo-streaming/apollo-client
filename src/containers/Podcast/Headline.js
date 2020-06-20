import React from 'react';

import HeadlineComponent from '../../components/Podcast/Headline';

const STATIC_PODCAST = {
  image:
    'https://dropsdejogos.uai.com.br/wp-content/uploads/sites/10/2019/11/nerdcast.jpg',
  podcast: 'Nerdcast',
  episodes: [],
};

function Headline() {
  return <HeadlineComponent {...STATIC_PODCAST} />;
}

export default Headline;
