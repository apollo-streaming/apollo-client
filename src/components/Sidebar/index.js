import React from 'react';
import * as PropTypes from 'prop-types';

import { SidebarContainer } from './styles';
import SidebarControls from './SidebarControls';
import RecentlyPlayed from './Content/RecentlyPlayed';

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
      text:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed necessitatibus architecto laudantium odio, officia libero quaerat dolores dolore quae impedit sint quam? Rem laudantium saepe cum. Vero similique quas aperiam?',
    },
  ],
};

function Sidebar({ username, onClose, recentlyPlayed = [] }) {
  return (
    <SidebarContainer>
      <SidebarControls username={username} onClose={onClose} />
      {!!recentlyPlayed.length && <RecentlyPlayed items={recentlyPlayed} />}
    </SidebarContainer>
  );
}

Sidebar.propTypes = {
  username: PropTypes.string,
  onClose: PropTypes.func,
  // eslint-disable-next-line
  recentlyPlayed: PropTypes.array,
};

export default Sidebar;
