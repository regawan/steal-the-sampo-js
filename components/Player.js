class Player {
    constructor(canvas) {
        this.canvas = canvas;
        this.width = 50;
        this.height = 100;

        // Center the player
        this.position = {
        x: this.canvas.width / 2 - this.width / 2,
        y: this.canvas.height / 2 - this.height / 2
        };

        this.velocity = 0;
        this.maxSpeed = 5;
    }
    
    reset() {
        this.position = {
        x: this.canvas.width / 2 - this.width / 2,
        y: this.canvas.height - this.height - 10
        };
        this.velocity = 0;
    }
    
    update(deltaTime) {
        if (!deltaTime) return;

        // Prevent the player from going out of bounds on the left and right
        if (this.position.x < 0) this.position.x = 0;
        if (this.position.x + this.width > this.canvas.width) this.position.x = this.canvas.width - this.width;

        this.position.x += this.velocity;
    }
    
    render(context) {
        context.fillStyle = '#a96600';
        context.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
    
    moveLeft() {
        this.velocity = -this.maxSpeed;
    }
    
    moveRight() {
        this.velocity = this.maxSpeed;
    }
}