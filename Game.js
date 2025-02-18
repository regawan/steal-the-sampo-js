import { Player } from './components/Player.js';

class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.context = canvas.getContext('2d');
    this.player = new Player(this.canvas);

    window.addEventListener('keydown', (event) => this.eventHandler(event, true));
    window.addEventListener('keyup', (event) => this.eventHandler(event, false));
  }

  eventHandler(event, isKeyDown) {
    if (isKeyDown) {
      if (event.key === 'ArrowLeft') {
        this.player.handleInput('left');
      } else if (event.key === 'ArrowRight') {
        this.player.handleInput('right');
      }
    } else {
      if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
        this.player.handleInput('stop');
      }
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