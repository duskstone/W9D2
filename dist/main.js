/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\")\n\nUtil.inherits(Asteroid, MovingObject);\n\nfunction Asteroid(properties){\n    this.COLOR = \"blue\";\n    this.RADIUS = 10;\n    this.game = properties.game;\n\n    properties.color = this.COLOR;\n    properties.radius = this.RADIUS;\n    properties.vel = Util.randomVec(10);\n    // debugger\n    MovingObject.call(this, properties);\n    // this.pos = properties.pos;\n    // const movingObject = new MovingObject(this.pos, this.vel, this.RADIUS, this.COLOR);\n    // super(this.pos, 8, this.RADIUS, this.COLOR);\n}\n\nmodule.exports = Asteroid;\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected token (56:4)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n|     this.asteroids.forEach(asteroid => {\\n|         asteroid.\\n>     })\\n| }\\n| \");\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\nconst Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\n// const Game = require(\"./game.js\");\n\nfunction GameView(ctx){\n    this.game = new Game();\n    this.ctx = ctx;\n\n}\n\nGameView.prototype.start = function(){\n    const that = this;\n\n    function begin() {\n        //setInterval(this.game.moveobjects, 20) => did not bind this properly, this = window here\n        setInterval(that.game.moveObjects.bind(that.game), 100);\n        setInterval(that.game.draw.bind(that.game, ctx), 100);//one function that calls these. 1 moves, 2nd draws\n    }\n\n    begin();\n}\n\n\n\nmodule.exports = GameView;\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// console.log(\"Webpack is working!\");\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\n// console.log(MovingObject);\n// debugger\nwindow.MovingObject = MovingObject;\n\nconst Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\nwindow.Util = Util;\n\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\nwindow.Asteroid = Asteroid;\n\nconst Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\nwindow.Game = Game;\n\nconst GameView = __webpack_require__(/*! ./game_view.js */ \"./src/game_view.js\");\nwindow.GameView = GameView;\n\nconst canvasCtx = document.addEventListener(\"DOMContentLoaded\", () => {\n    const canvas = document.getElementById(\"game-canvas\");\n    // console.log(canvas);\n\n    const ctx = canvas.getContext(\"2d\");\n    window.ctx = ctx\n\n    const gv = new GameView(ctx);\n    gv.start();\n})\n\n// const Canvas = require(\"./canvas.js\");\n// debugger\n// window.Canvas = Canvas;\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// const Game = require(\"./game.js\");\n\nfunction MovingObject(properties){\n        // or properties.pos\n        this.pos = properties.pos;\n        this.vel = properties.vel;\n        this.radius = properties.radius;\n        this.color = properties.color;\n        this.game = properties.game;\n};\n\n\nMovingObject.prototype.draw = function(ctx) {\n    // debugger\n    ctx.fillStyle = this.color;\n    ctx.beginPath();\n\n    ctx.arc(\n        this.pos[0],this.pos[1],\n        this.radius,\n        0,\n        2 * Math.PI,\n        false\n    );\n\n    ctx.fill();\n};\n\nMovingObject.prototype.move = function() {\n    this.pos[0] += this.vel[0];\n    this.pos[1] += this.vel[1];\n\n    this.pos = this.game.wrap(this.pos)\n}\n\nMovingObject.prototype.isCollidedWith = function(otherObject) {\n    let x1 = this.pos[0];\n    let y1 = this.pos[1];\n    let x2 = otherObject.pos[0];\n    let y2 = otherObject.pos[1];\n    let radiiSum = this.radius + otherObject.radius;\n\n    let dist = (y2 - y1) / (x2 - x1);\n\n    if(dist < radiiSum ) {\n        return true;\n    } else {\n        return false;\n    }\n}\n\nmodule.exports = MovingObject;\n\n\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\nconst Util = {\n\n    inherits(child, parent) {\n        function Surrogate(){};\n\n        Surrogate.prototype = parent.prototype;\n        child.prototype = new Surrogate();\n        child.prototype.constructor = child;\n    },\n\n    // Return a randomly oriented vector with the given length.\n\n    randomVec(length) {\n        const deg = 2 * Math.PI * Math.random();\n        return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n    },\n\n    // Scale the length of a vector by the given amount.\n\n    scale(vec, m) {\n    return [vec[0] * m, vec[1] * m];\n    }\n}\n\n\nmodule.exports = Util;\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ })

/******/ });