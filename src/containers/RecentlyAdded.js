import React from 'react';

import RecentlyAddedComponent from '../components/RecentlyAdded';

const STATIC_ADDED_ITEMS = [
  {
    image:
      'https://s3.glbimg.com/v1/AUTH_08fb001c60b847468664307c11fa9dc9/public/2019/5/p6S0jsOw1VjrcH9ZT65i.jpg',
    title: '2 pontos',
    subtitle: 'Globo Esporte',
  },
  {
    image:
      'https://www.omnycontent.com/d/clips/aaea4e69-af51-495e-afc9-a9760146922b/75a86d39-9e0e-4e9a-b948-aae301805fe6/192683a7-97c6-46f6-b758-ab200057e17e/image.jpg?t=1576041602&size=Large',
    title: 'Office Ladies',
    subtitle: 'Earwolf',
  },
];

function RecentlyAdded() {
  const items = STATIC_ADDED_ITEMS;

  return <RecentlyAddedComponent addedItems={items} />;
}

export default RecentlyAdded;
