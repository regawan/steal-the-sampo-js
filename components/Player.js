import { PlayerIdleState, PlayerMovingLeftState, PlayerMovingRightState } from './State.js';

// Start position for player is in the middle of the canvas
const startPosition = (canvas, width, height) => ({
    x: canvas.width / 2 - width / 2,
    y: canvas.height / 2 - height / 2
});

class Player {
    constructor(canvas) {
        // Properties
        this.canvas = canvas;
        this.width = 50;
        this.height = 100;
        this.position = startPosition(this.canvas, this.width, this.height);
        this.velocity = 0;
        this.moveSpeed = 5;

        // States
        this.states = {
            idle: new PlayerIdleState(this),
            movingLeft: new PlayerMovingLeftState(this),
            movingRight: new PlayerMovingRightState(this)
        };
        this.currentState = this.states.idle;
        this.currentState.enter();
    }

    reset() {
        this.position = startPosition(this.canvas, this.width, this.height);
        this.velocity = 0;
        this.setState('idle');
    }

    setState(state) {
        this.currentState = this.states[state];
        this.currentState.enter();
    }

    handleInput(input) {
        this.currentState.handleInput(input);
    }
    
    update(deltaTime) {
        if (!deltaTime) return;

        // Prevent the player from going out of bounds on the left and right
        if (this.position.x < 0) this.position.x = 0;
        if (this.position.x + this.width > this.canvas.width) this.position.x = this.canvas.width - this.width;

        this.position.x += this.velocity;
    }
    
    render(context) {
        context.fillStyle = '#884204';
        context.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
}

export { Player };

export { Player };