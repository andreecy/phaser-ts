import Phaser from 'phaser'
import Gameplay from './scenes/Gameplay'
import './style.css'

let config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: window.innerWidth,
  height: window.innerHeight,
  parent: 'app',
  pixelArt: true,
  scene: [Gameplay]
}

export default new Phaser.Game(config)
