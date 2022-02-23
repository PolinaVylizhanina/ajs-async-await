import GameSavingLoader from '../gameSavingLoader';

test(
  'Should work correct',
  async () => {
    try {
      const data = await GameSavingLoader.load();
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
    } catch (err) {
      throw new Error(err);
    }
  },
);
