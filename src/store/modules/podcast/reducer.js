const INITIAL_STATE = {
  current: {
    image:
      'https://dropsdejogos.uai.com.br/wp-content/uploads/sites/10/2019/11/nerdcast.jpg',
    podcast: 'Nerdcast',
    episodes: [
      {
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
        ],
        duration: 3000,
        image:
          'https://spotlight.radiopublic.com/images/thumbnail?url=https%3A%2F%2Fjovemnerd.com.br%2Fwp-content%2Fuploads%2F2019%2F09%2FNC_691_The-boys_Fomato-1400x1400.jpg',
        title: 'NerdCast 229 AAAA - Duplipensamentos sobre 1984',
        description:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis reprehenderit dolores, cum suscipit dolore aut, eveniet dolor cumque deleniti officia, earum vitae inventore aperiam delectus quia sit atque dignissimos soluta.',
      },
    ],
  },
  recommended: [
    {
      image:
        'https://upload.wikimedia.org/wikipedia/pt/7/78/Nerdcast_-_2006.jpg',
      title: 'Nerdcast',
      subtitle: 'O Nerdcast completou 10 anos em 2016',
      link: '/podcast',
    },
    {
      image: 'https://i4.sndcdn.com/avatars-000314071007-g4fkke-t500x500.jpg',
      title: 'Diagrama',
      subtitle: 'Diagrama é um podcast sobre design',
      link: '/podcast',
    },
  ],
  recentlyAdded: [
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
  ],
  following: [
    {
      image:
        'https://upload.wikimedia.org/wikipedia/pt/7/78/Nerdcast_-_2006.jpg',
      title: 'Nerdcast',
    },
    {
      image: 'https://i4.sndcdn.com/avatars-000314071007-g4fkke-t500x500.jpg',
      title: 'Diagrama',
    },
    {
      image:
        'https://upload.wikimedia.org/wikipedia/pt/7/78/Nerdcast_-_2006.jpg',
      title: 'Nerdcast',
    },
    {
      image: 'https://i4.sndcdn.com/avatars-000314071007-g4fkke-t500x500.jpg',
      title: 'Diagrama',
    },
  ],
};

export default function reducer(state = INITIAL_STATE, action) {
  const { type } = action;

  switch (type) {
    default:
      return state;
  }
}
