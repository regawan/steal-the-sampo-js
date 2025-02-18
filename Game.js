import { Player } from './components/Player.js';

class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.context = canvas.getContext('2d');
    this.player = new Player(this.canvas);
  }

  reset() {
    this.player.reset();
  }

  update(deltaTime) {
    this.player.update(deltaTime);
  }

  render() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height); // Clear the canvas
    this.player.render(this.context);
  }
}

export { Game };