// const Game = require("./game.js");

function MovingObject(properties){
        // or properties.pos
        this.pos = properties.pos;
        this.vel = properties.vel;
        this.radius = properties.radius;
        this.color = properties.color;
        this.game = properties.game;
};


MovingObject.prototype.draw = function(ctx) {
    // debugger
    ctx.fillStyle = this.color;
    ctx.beginPath();

    ctx.arc(
        this.pos[0],this.pos[1],
        this.radius,
        0,
        2 * Math.PI,
        false
    );

    ctx.fill();
};

MovingObject.prototype.move = function() {
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];

    this.pos = this.game.wrap(this.pos)
}

MovingObject.prototype.isCollidedWith = function(otherObject) {
    let x1 = this.pos[0];
    let y1 = this.pos[1];
    let x2 = otherObject.pos[0];
    let y2 = otherObject.pos[1];
    let radiiSum = this.radius + otherObject.radius;

    let dist = (y2 - y1) / (x2 - x1);

    if(dist < radiiSum ) {
        return true;
    } else {
        return false;
    }
}

module.exports = MovingObject;

