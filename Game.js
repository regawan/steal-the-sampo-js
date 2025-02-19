import { Player } from './components/Player.js';

class Game {
  constructor(canvas) {
    // Setup properties
    this.canvas = canvas;
    this.context = canvas.getContext('2d');
    this.player = new Player(this.canvas);

    // Setup key event listeners
    this.keys = new Set();
    window.addEventListener('keydown', (event) => this.handleKeyDown(event));
    window.addEventListener('keyup', (event) => this.handleKeyUp(event));
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
      // If both keys are pressed, instruct player to stop.
      this.player.currentState.handleInput('stop');
    } else if (this.keys.has('ArrowLeft')) {
      this.player.currentState.handleInput('left');
    } else if (this.keys.has('ArrowRight')) {
      this.player.currentState.handleInput('right');
    } else {
      // If no keys are pressed, instruct player to stop.
      this.player.currentState.handleInput('stop');
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