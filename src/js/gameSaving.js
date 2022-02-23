export default class GameSaving {
  constructor(dt) {
    const data = JSON.parse(dt);
    this.id = data.id;
    this.created = data.created;
    this.userInfo = data.userInfo;
  }
}
