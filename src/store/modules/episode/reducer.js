const INITIAL_STATE = {
  recentlyPlayed: [
    // {
    //   commentaries: [
    //     {
    //       user: {
    //         avatar:
    //           'https://pbs.twimg.com/profile_images/1259877802217783299/1KQeL_de_400x400.jpg',
    //         name: 'Thalles',
    //       },
    //       createdAt: new Date(),
    //       content: 'Teste',
    //     },
    //   ],
    //   stoppedAt: 45,
    //   duration: 3000,
    //   podcast: 'Nerdcast',
    //   link:
    //     'https://nerdcast-cdn.jovemnerd.com.br/nerdcast_549_RPG_cthulhu_1.mp3',
    //   image:
    //     'https://uploads.jovemnerd.com.br/wp-content/uploads/2018/01/NERDCASTESPECIALRPG01-1210x544.jpg',
    //   title: 'RPG Call of Cthulhu 1: O mistério de William Faraday',
    //   description:
    //     '38 de dezembro de 2016. Um ano que todo mundo quer que acabe de uma vez por todas. Feliz ano novo! Junte-se a Alexandre Ottoni, Azaghal, Tucano, Rex, Carlos Voltor e Leonel Caldela em mais um Nerdcast Especial de RPG.',
    // },
  ],
};

export default function reducer(state = INITIAL_STATE, action) {
  const { type } = action;

  switch (type) {
    default:
      return state;
  }
}
