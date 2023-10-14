import Phaser from 'phaser'
import Gameplay from './Scenes/Gameplay'
import './style.css'

let config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: window.innerWidth,
  height: window.innerHeight,
  parent: 'app',
  pixelArt: true,
  scene: [Gameplay]
}

const game = new Phaser.Game(config)
