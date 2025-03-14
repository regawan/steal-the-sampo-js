import { Game } from './Game.js';

// Fetch canvas from DOM and construct game using it
const canvas = document.getElementById('gameCanvas');
const game = new Game(canvas);

const img = new Image();
img.src = "./images/baltic-sea-pixelated.jpg";

let imageY = 0;
const imageX = canvas.width / 2 - 300;
const speed = 0.1;

let images = [
  { x: 0, y: 0 },
  { x: 0, y: 600 },
  { x: 0, y: 1200 },
];

let lastTime = 0;

function gameLoop(timestamp) {
  const deltaTime = timestamp - lastTime;
  lastTime = timestamp;

  // Update game logic
  game.update(deltaTime);

  // Start rendering
  // 1. Clear the canvas
  game.context.clearRect(0, 0, game.canvas.width, game.canvas.height);

  // 2. Draw images
  images.forEach(image => {
    image.y += speed * deltaTime;

    // If the image moves off the bottom, move it to the top of the other image
    if (image.y >= canvas.height) {
      image.y = -canvas.height + (image.y - canvas.height);  // Wrap around
    }

    // Draw the image
    if (img.complete) {
      game.context.drawImage(img, image.x, image.y, canvas.width, canvas.height);
    }
  });

  // 3. Draw game objects
  game.render();

  // Request the next frame of the game loop
  requestAnimationFrame(gameLoop);
}

game.reset();

// Start the game loop
requestAnimationFrame(gameLoop);