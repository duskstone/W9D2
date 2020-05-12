// console.log("Webpack is working!");
const MovingObject = require("./moving_object.js");
// console.log(MovingObject);
// debugger
window.MovingObject = MovingObject;

const Util = require("./util.js");
window.Util = Util;

const Asteroid = require("./asteroid.js");
window.Asteroid = Asteroid;

const Game = require("./game.js");
window.Game = Game;

const GameView = require("./game_view.js");
window.GameView = GameView;

const canvasCtx = document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("game-canvas");
    // console.log(canvas);

    const ctx = canvas.getContext("2d");
    window.ctx = ctx

    const gv = new GameView(ctx);
    gv.start();
})

// const Canvas = require("./canvas.js");
// debugger
// window.Canvas = Canvas;