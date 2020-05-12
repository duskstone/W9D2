const Util = require("./util.js");
const MovingObject = require("./moving_object.js")

Util.inherits(Asteroid, MovingObject);

function Asteroid(properties){
    this.COLOR = "blue";
    this.RADIUS = 10;
    this.game = properties.game;

    properties.color = this.COLOR;
    properties.radius = this.RADIUS;
    properties.vel = Util.randomVec(10);
    // debugger
    MovingObject.call(this, properties);
    // this.pos = properties.pos;
    // const movingObject = new MovingObject(this.pos, this.vel, this.RADIUS, this.COLOR);
    // super(this.pos, 8, this.RADIUS, this.COLOR);
}

module.exports = Asteroid;