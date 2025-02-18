import { Player } from './components/Player.js';

class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.context = canvas.getContext('2d');
    this.player = new Player(this.canvas);
    this.keys = new Set(); // Initialize the keys set

    window.addEventListener('keydown', (event) => this.handleKeyDown(event));
  }

  handleKeyDown(event) {
    this.keys.add(event.key);
    this.updatePlayerState();
  }

  handleKeyUp(event) {
    this.keys.delete(event.key);
    this.updatePlayerState();
  }

  updatePlayerState() {
    if (this.keys.has('ArrowLeft') && this.keys.has('ArrowRight')) {
      // If both keys are pressed, stop the player
      this.player.handleInput('stop');
    } else if (this.keys.has('ArrowLeft')) {
      this.player.handleInput('left');
    } else if (this.keys.has('ArrowRight')) {
      this.player.handleInput('right');
    } else {
      this.player.handleInput('stop');
    }
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