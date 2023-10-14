import Phaser from 'phaser'

export default class Gameplay extends Phaser.Scene {

  preload() {}

  create() {
    this.add.text(200, 200, 'Hello world')
  }

  update(time: number, delta: number) {}
}
