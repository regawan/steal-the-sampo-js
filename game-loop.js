import { Game } from './Game.js';

const canvas = document.getElementById('gameCanvas');
const game = new Game(canvas);

let lastTime = 0;

function gameLoop(timestamp) {
  const deltaTime = timestamp - lastTime;
  lastTime = timestamp;

  game.update(deltaTime);  // Update game logic
  game.render();           // Render everything

  // Request the next frame of the game loop
  requestAnimationFrame(gameLoop);
}

// Start the game and the loop
game.reset();
requestAnimationFrame(gameLoop);