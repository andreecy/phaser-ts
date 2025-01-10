import { Scene } from 'phaser'

export default class Gameplay extends Scene {
  preload() {}

  create() {
    this.add.text(200, 200, 'Hello world')
  }

  update(time: number, delta: number) {}
}
