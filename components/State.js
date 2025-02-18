class State {
    constructor() {}
    
    enter() {}
    handleInput() {}
}

class PlayerState extends State {
    constructor(player) {
        super();
        this.player = player;
    }
}

class PlayerIdleState extends PlayerState {
    enter() {
        this.player.velocity = 0;
    }

    handleInput(input) {
        if (input === 'left') {
            this.player.setState('movingLeft');
        } else if (input === 'right') {
            this.player.setState('movingRight');
        }
    }
}

class PlayerMovingLeftState extends PlayerState {
    enter() {
        this.player.velocity = -this.player.moveSpeed;
    }

    handleInput(input) {
        if (input === 'stop') {
            this.player.setState('idle');
        } else if (input === 'right') {
            this.player.setState('movingRight');
        }
    }
}

class PlayerMovingRightState extends PlayerState {
    enter() {
        this.player.velocity = this.player.moveSpeed;
    }

    handleInput(input) {
        if (input === 'stop') {
            this.player.setState('idle');
        } else if (input === 'left') {
            this.player.setState('movingLeft');
        }
    }
}

export { PlayerIdleState, PlayerMovingLeftState, PlayerMovingRightState };