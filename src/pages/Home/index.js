import React from 'react';
import { HomeWrapper } from './styles';
import { H1 } from '../../design-system/Typography';
import PodcastCard from '../../components/PodcastCard';
import ScrollableList from '../../components/ScrollableList';
import COLORS from '../../design-system/COLORS';
import ArtistCard from '../../components/ArtistCard';

function Home() {
  const items = [
    {
      src:
        'https://img.discogs.com/yiFcPQQ0SIEtl4YWFV20cE4Ly-Q=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-13674626-1558781362-5528.jpeg.jpg',
      title: 'The Balance',
      artist: 'Catfish And The Bottlemen',
    },
    {
      src:
        'https://images-na.ssl-images-amazon.com/images/I/711ql0kiTCL._AC_SL1425_.jpg',
      title: 'Louder Than Bombs',
      artist: 'The Smiths',
    },
    {
      src: 'https://upload.wikimedia.org/wikipedia/en/d/d9/Strokes_1.jpg',
      title: 'Angles',
      artist: 'The Strokes',
    },
  ];

  const artists = [
    {
      src:
        'https://studiosol-a.akamaihd.net/uploadfile/letras/fotos/a/a/d/8/aad83a266299019ad0d771f8b7834426.jpg',
      artist: 'The Lumineers',
    },
    {
      src:
        'https://celulapop.com.br/wp-content/uploads/2019/06/the-black-keys-alysse-800x445.jpg',
      artist: 'The Black Keys',
    },
    {
      src:
        'https://www.fashionably-early.com/wp-content/uploads/frank-ocean-2016-green.jpg',
      artist: 'Frank Ocean',
    },
  ];

  return (
    <HomeWrapper>
      <H1 color={COLORS.CLEAR_100} weight="bold" mb="12px">
        Podcasts populares
      </H1>
      <ScrollableList>
        {items.map((item) => (
          <PodcastCard key={item.src} {...item} />
        ))}
      </ScrollableList>
      <H1 color={COLORS.CLEAR_100} weight="bold" mt="60px" mb="12px">
        Artistas populares
      </H1>
      <ScrollableList>
        {artists.map((item) => (
          <ArtistCard key={item.src} {...item} />
        ))}
      </ScrollableList>
    </HomeWrapper>
  );
}

export default Home;
