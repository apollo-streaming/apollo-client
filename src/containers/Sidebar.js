import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';

import SidebarComponent from '../components/Sidebar';

const STATIC_RECENTLY_PLAYED = [
  {
    image: 'https://i1.sndcdn.com/avatars-000445864257-cuwg3m-t500x500.jpg',
    podcast: 'The Ground Up Show',
    episode: "94 - Success Doesn't Equal Happiness",
    stoppedAt: 2737,
    duration: 3000,
  },
];

const STATIC_EPISODE_INFO = {
  about:
    'O Nerdcast completou 10 anos em 2016 com 1 milhão de downloads por episódio e como primeiro lugar de audiência em podcasts no Brasil. Os assuntos são',
  commentaries: [
    {
      user: {
        avatar:
          'https://pbs.twimg.com/profile_images/1259877802217783299/1KQeL_de_400x400.jpg',
        name: 'Thalles N.',
      },
      createdAt: new Date(),
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed necessitatibus architecto laudantium odio, officia libero quaerat dolores dolore quae impedit sint quam? Rem laudantium saepe cum. Vero similique quas aperiam?',
    },
    {
      user: {
        avatar:
          'https://pbs.twimg.com/profile_images/1259877802217783299/1KQeL_de_400x400.jpg',
        name: 'Thalles N.',
      },
      createdAt: new Date(),
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed necessitatibus architecto laudantium odio, officia libero quaerat dolores dolore quae impedit sint quam? Rem laudantium saepe cum. Vero similique quas aperiam?',
    },
    {
      user: {
        avatar:
          'https://pbs.twimg.com/profile_images/1259877802217783299/1KQeL_de_400x400.jpg',
        name: 'Thalles N.',
      },
      createdAt: new Date(),
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed necessitatibus architecto laudantium odio, officia libero quaerat dolores dolore quae impedit sint quam? Rem laudantium saepe cum. Vero similique quas aperiam?',
    },
    {
      user: {
        avatar:
          'https://pbs.twimg.com/profile_images/1259877802217783299/1KQeL_de_400x400.jpg',
        name: 'Thalles N.',
      },
      createdAt: new Date(),
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed necessitatibus architecto laudantium odio, officia libero quaerat dolores dolore quae impedit sint quam? Rem laudantium saepe cum. Vero similique quas aperiam?',
    },
    {
      user: {
        avatar:
          'https://pbs.twimg.com/profile_images/1259877802217783299/1KQeL_de_400x400.jpg',
        name: 'Thalles N.',
      },
      createdAt: new Date(),
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed necessitatibus architecto laudantium odio, officia libero quaerat dolores dolore quae impedit sint quam? Rem laudantium saepe cum. Vero similique quas aperiam?',
    },
    {
      user: {
        avatar:
          'https://pbs.twimg.com/profile_images/1259877802217783299/1KQeL_de_400x400.jpg',
        name: 'Thalles N.',
      },
      createdAt: new Date(),
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed necessitatibus architecto laudantium odio, officia libero quaerat dolores dolore quae impedit sint quam? Rem laudantium saepe cum. Vero similique quas aperiam?',
    },
  ],
};

function Sidebar() {
  // const dispatch = useDispatch();
  const [commentary, setCommentary] = useState('');

  const onHandleClose = () => {
    console.log('Fechar');
  };

  return (
    <SidebarComponent
      username="Thalles Carvalho"
      onClose={onHandleClose}
      aboutEpisode={{ ...STATIC_EPISODE_INFO, commentary, setCommentary }}
      recentlyPlayed={[]}
    />
  );
}

export default Sidebar;
