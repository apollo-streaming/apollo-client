const INITIAL_STATE = {
  recentlyPlayed: [
    {
      image: 'https://i1.sndcdn.com/avatars-000445864257-cuwg3m-t500x500.jpg',
      podcast: 'The Ground Up Show',
      episode: "94 - Success Doesn't Equal Happiness",
      stoppedAt: 2737,
      duration: 3000,
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
