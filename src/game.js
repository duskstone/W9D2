const Asteroid = require("./asteroid.js");
const MovingObject = require("./moving_object.js");
const Util = require("./util.js");

function Game() {
    this.DIM_X = 800;
    this.DIM_Y = 600;
    this.NUM_ASTEROIDS = 10;
    this.asteroids = [];



    for(let i = this.asteroids.length; i < this.NUM_ASTEROIDS; i++) {
    //     const game = new Game();
        this.addAsteroids();
    }
}

Game.prototype.addAsteroids = function() {
        const pos = [this.DIM_X * Math.random(), this.DIM_Y * Math.random()];
        const asteroid = new Asteroid({pos: pos, game: this});
        this.asteroids.push(asteroid);
}

Game.prototype.randomPosition = function() {

}

Game.prototype.draw = function(ctx) {
    ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);
    this.asteroids.forEach(asteroid => {
        asteroid.draw(ctx);
    });
}

Game.prototype.moveObjects = function() {
    // debugger
    this.asteroids.forEach(asteroid => {
        asteroid.move();
    });
}

Game.prototype.wrap = function(pos) {
    // this.asteroids.forEach(asteroid => {
        let x = pos[0];
        let y = pos[1];

        let posa = [x % this.DIM_X, y % this.DIM_Y];
        return posa;
    // })   
}

Game.prototype.checkCollision = function() {
    this.asteroids.forEach(asteroid => {
        asteroid.
    })
}

module.exports = Game;