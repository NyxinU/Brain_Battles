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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__left_side_arrow__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__left_side_arrow___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__left_side_arrow__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__right_side_arrow__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__right_side_arrow___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__right_side_arrow__);




/***/ }),
/* 1 */,
/* 2 */
/***/ (function(module, exports) {

const allArrows = {
  redUpArrow: '<i class="fa fa-arrow-circle-up red-arrow" aria-hidden="true"></i>',
  redDownArrow: '<i class="fa fa-arrow-circle-down red-arrow" aria-hidden="true"></i>',
  redLeftArrow: '<i class="fa fa-arrow-circle-left red-arrow" aria-hidden="true"></i>',
  redRightArrow: '<i class="fa fa-arrow-circle-right red-arrow" aria-hidden="true"></i>',
  blueUpArrow: '<i class="fa fa-arrow-circle-up blue-arrow" aria-hidden="true"></i>',
  blueDownArrow: '<i class="fa fa-arrow-circle-down blue-arrow" aria-hidden="true"></i>',
  blueLeftArrow: '<i class="fa fa-arrow-circle-left blue-arrow" aria-hidden="true"></i>',
  blueRightArrow: '<i class="fa fa-arrow-circle-right blue-arrow" aria-hidden="true"></i>',
};

const allArrowsArr = [
  'redUpArrow',
  'redDownArrow',
  'redLeftArrow',
  'redRightArrow',
  'blueUpArrow',
  'blueDownArrow',
  'blueLeftArrow',
  'blueRightArrow',
];

const correctAnswers = {
  redUpArrow: 'down',
  redDownArrow: 'up',
  redLeftArrow: 'right',
  redRightArrow: 'left',
  blueUpArrow: 'up',
  blueDownArrow: 'down',
  blueLeftArrow: 'left',
  blueRightArrow: 'right',
};

const countdownTimer = document.querySelector(".countdown-timer");
const score = document.querySelector(".p1-score");
const arrows = Array.from(document.querySelectorAll(".arrow"));
const start = document.querySelector(".start-button");
start.addEventListener("click",() =>{
  startGamePlayer1();
});

let timeLeft = 30;
countdownTimer.innerHTML = timeLeft;

let scoreCount = 0;
let streakCount = 0;
score.innerHTML = scoreCount;

let userInput;
let currentArrow;

document.addEventListener("keydown", afterUserInput);

function startGamePlayer1() {
  start.className = "hidden";
  renderArrow();
  timer();
}

let timer = () => {
  const interval = setInterval(function() {
    if (timeLeft <= 0 ) {
      clearInterval(interval);
      window.alert (`Time is up, your score was ${scoreCount}`);
      return interval;
    }
    --timeLeft;
    countdownTimer.innerHTML = timeLeft;
    }, 1000);
};

function afterUserInput(e) {
  handleKeyDown(e);
  if (userInput) {
    if (checkCorrectAnswer()) {
      handleCorrectAnswer();
      renderArrow();
    }else {
      handleWrongAnswer();
    }
    score.innerHTML = scoreCount;
    userInput = undefined;
  }
}

function handleCorrectAnswer() {
  if (streakCount <= 20) {
    streakCount += 10;
  }
  scoreCount += streakCount;
}

function handleWrongAnswer() {
  streakCount = 0;
  if (scoreCount > 0) {
    scoreCount -= 10;
  }
}

function renderArrow() {
  currentArrow = allArrowsArr[getRandomInt(0,8)];
  console.log(arrows);
    arrows[0].innerHTML = allArrows[currentArrow];
}

function handleKeyDown(e) {
  e.preventDefault();
  const keyCode = e.keyCode;
  switch (keyCode) {
    case 65:
      userInput = "left";
      break;
    case 87:
      userInput = "up";
      break;
    case 68:
      userInput = "right";
      break;
    case 83:
      userInput = "down";
      break;
  }
}

function checkCorrectAnswer() {
  return correctAnswers[currentArrow] === userInput;
}

function getRandomInt(min, max) {
  min = min;
  max = max ;
  return Math.floor(Math.random() * (max-min)) + min;
}


/***/ }),
/* 3 */
/***/ (function(module, exports) {

const allArrows = {
  redUpArrow: '<i class="fa fa-arrow-circle-up red-arrow" aria-hidden="true"></i>',
  redDownArrow: '<i class="fa fa-arrow-circle-down red-arrow" aria-hidden="true"></i>',
  redLeftArrow: '<i class="fa fa-arrow-circle-left red-arrow" aria-hidden="true"></i>',
  redRightArrow: '<i class="fa fa-arrow-circle-right red-arrow" aria-hidden="true"></i>',
  blueUpArrow: '<i class="fa fa-arrow-circle-up blue-arrow" aria-hidden="true"></i>',
  blueDownArrow: '<i class="fa fa-arrow-circle-down blue-arrow" aria-hidden="true"></i>',
  blueLeftArrow: '<i class="fa fa-arrow-circle-left blue-arrow" aria-hidden="true"></i>',
  blueRightArrow: '<i class="fa fa-arrow-circle-right blue-arrow" aria-hidden="true"></i>',
};

const allArrowsArr = [
  'redUpArrow',
  'redDownArrow',
  'redLeftArrow',
  'redRightArrow',
  'blueUpArrow',
  'blueDownArrow',
  'blueLeftArrow',
  'blueRightArrow',
];

const correctAnswers = {
  redUpArrow: 'down',
  redDownArrow: 'up',
  redLeftArrow: 'right',
  redRightArrow: 'left',
  blueUpArrow: 'up',
  blueDownArrow: 'down',
  blueLeftArrow: 'left',
  blueRightArrow: 'right',
};

const countdownTimer = document.querySelector(".countdown-timer");
const score = document.querySelector(".p2-score");
const arrows = Array.from(document.querySelectorAll(".arrow"));
const start = document.querySelector(".start-button");
start.addEventListener("click",() =>{
  startGamePlayer2();
});

let timeLeft = 30;
countdownTimer.innerHTML = timeLeft;

let scoreCount = 0;
let streakCount = 0;
score.innerHTML = scoreCount;

let userInput;
let currentArrow;

document.addEventListener("keydown", afterUserInput);

function startGamePlayer2() {
  start.className = "hidden";
  renderArrow();
  timer();
}

let timer = () => {
  const interval = setInterval(function() {
    if (timeLeft <= 0 ) {
      clearInterval(interval);
      window.alert (`Time is up, your score was ${scoreCount}`);
      return interval;
    }
    --timeLeft;
    countdownTimer.innerHTML = timeLeft;
    }, 1000);
};

function afterUserInput(e) {
  handleKeyDown(e);
  if (userInput) {
    if (checkCorrectAnswer()) {
      handleCorrectAnswer();
      renderArrow();
    }else {
      handleWrongAnswer();
    }
    score.innerHTML = scoreCount;
    userInput = undefined;
  }
}

function handleCorrectAnswer() {
  if (streakCount <= 20) {
    streakCount += 10;
  }
  scoreCount += streakCount;
}

function handleWrongAnswer() {
  streakCount = 0;
  if (scoreCount > 0) {
    scoreCount -= 10;
  }
}

function renderArrow() {
  currentArrow = allArrowsArr[getRandomInt(0,8)];
  console.log(arrows);
    arrows[1].innerHTML = allArrows[currentArrow];
}

function handleKeyDown(e) {
  e.preventDefault();
  const keyCode = e.keyCode;
  switch (keyCode) {
    case 37:
      userInput = "left";
      break;
    case 38:
      userInput = "up";
      break;
    case 39:
      userInput = "right";
      break;
    case 40:
      userInput = "down";
      break;
  }
}

function checkCorrectAnswer() {
  return correctAnswers[currentArrow] === userInput;
}

function getRandomInt(min, max) {
  min = min;
  max = max ;
  return Math.floor(Math.random() * (max-min)) + min;
}


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map