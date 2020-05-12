const Asteroid = require("./asteroid.js");
const MovingObject = require("./moving_object.js");
const Util = require("./util.js");
const Game = require("./game.js");
// const Game = require("./game.js");

function GameView(ctx){
    this.game = new Game();
    this.ctx = ctx;

}

GameView.prototype.start = function(){
    const that = this;

    function begin() {
        //setInterval(this.game.moveobjects, 20) => did not bind this properly, this = window here
        setInterval(that.game.moveObjects.bind(that.game), 100);
        setInterval(that.game.draw.bind(that.game, ctx), 100);//one function that calls these. 1 moves, 2nd draws
    }

    begin();
}



module.exports = GameView;