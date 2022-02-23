import read from './reader';
import json from './parser';
import GameSaving from './gameSaving';

export default class GameSavingLoader {
  static load() {
    return read()
      .then((result) => json(result))
      .then((response) => response)
      .then((data) => new GameSaving(data));
  }
}
