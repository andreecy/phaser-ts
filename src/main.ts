import Phaser from 'phaser'
import Gameplay from './Scenes/Gameplay'
import './style.css'

let config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  pixelArt: true,
  scene: [Gameplay]
}

const game = new Phaser.Game(config)
