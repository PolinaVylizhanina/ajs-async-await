import GameSavingLoader from '../gameSavingLoader';

test(
  'Should work correct',
  () => GameSavingLoader.load().then((data) => {
    expect(data).toEqual({
      id: 9,
      created: 1234560800,
      userInfo: {
        id: 1,
        name: 'Zombie',
        level: 10,
        points: 2000,
      },
    });
  }),
);
