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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__right_side_arrow__ = __webpack_require__(3);



const gameHeader = document.querySelector(".game-header");
const p1Score = document.querySelector(".p1-score");
const p2Score = document.querySelector(".p2-score");
const timerWrapper = document.querySelector(".timer-wrapper");
const countdownTimer = document.querySelector(".countdown-timer");
const whiteBackgroundArrow = Array.from(document.querySelectorAll(".white-background-arrow"));
const arrows = Array.from(document.querySelectorAll(".arrow"));
const instructions = document.querySelector(".instructions");
const start = document.querySelector(".start-button");


// starting state
// document.removeEventListener("keydown", afterP1Input);
// document.removeEventListener("keydown", afterP2Input);

Object(__WEBPACK_IMPORTED_MODULE_0__left_side_arrow__["d" /* renderPlayer1IntroArrow */])();
Object(__WEBPACK_IMPORTED_MODULE_1__right_side_arrow__["d" /* renderPlayer2IntroArrow */])();
let timeLeft = 0;
//

start.addEventListener("click",() =>{
  start.className = "hidden";
  timerWrapper.classList.remove("hidden");
  // instructions.innerHTML = "";
  removeTitle();
  resetScore();
  clearArrows();
  gameHeader.classList.remove("hidden");
  timer(3, function() {
    unhideArrows();
    startGamePlayer1();
    startGamePlayer2();
    timer(30, function () {
      countdownTimer.innerHTML = 0;
      setTimeout(function() {
        clearArrows();
        start.innerHTML = "Play Again";
        start.className = "start-button";
        start.classList.remove("hidden");
      },1000);
    });
  });
});

// countdown timer before game starts and duration of game
let timer = (duration, callback) => {
  timeLeft = duration;
  countdownTimer.innerHTML = timeLeft;
  const interval = setInterval(function() {
    if (callback ? timeLeft <= 1 : timeLeft <= 0 ) {
      clearInterval(interval);
      if (typeof callback === "function") {
        callback();
      }
      return interval;
    }
    timeLeft--;
    countdownTimer.innerHTML = timeLeft;
    }, 1000);
};

function startGamePlayer1() {
  Object(__WEBPACK_IMPORTED_MODULE_0__left_side_arrow__["c" /* renderPlayer1Arrow */])();
}

function startGamePlayer2() {
  Object(__WEBPACK_IMPORTED_MODULE_1__right_side_arrow__["c" /* renderPlayer2Arrow */])();
}

function removeTitle() {
  const title = document.querySelector(".game-title");
  while (title.hasChildNodes()) {
    title.removeChild(title.firstChild);
  }
}

function clearArrows() {
  arrows.forEach(function(arrow) {
    arrow.innerHTML = "";
  });
  document.removeEventListener("keydown", __WEBPACK_IMPORTED_MODULE_0__left_side_arrow__["a" /* afterP1Input */]);
  document.removeEventListener("keydown", __WEBPACK_IMPORTED_MODULE_1__right_side_arrow__["a" /* afterP2Input */]);
}

function unhideArrows() {
  document.addEventListener("keydown", __WEBPACK_IMPORTED_MODULE_0__left_side_arrow__["a" /* afterP1Input */]);
  document.addEventListener("keydown", __WEBPACK_IMPORTED_MODULE_1__right_side_arrow__["a" /* afterP2Input */]);
}

function resetScore() {
  p1Score.innerHTML = 0;
  p2Score.innerHTML = 0;
  Object(__WEBPACK_IMPORTED_MODULE_0__left_side_arrow__["b" /* clearP1Score */])();
  Object(__WEBPACK_IMPORTED_MODULE_1__right_side_arrow__["b" /* clearP2Score */])();
}


/***/ }),
/* 1 */,
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export p1ScoreCount */
/* harmony export (immutable) */ __webpack_exports__["a"] = afterP1Input;
/* harmony export (immutable) */ __webpack_exports__["c"] = renderPlayer1Arrow;
/* harmony export (immutable) */ __webpack_exports__["d"] = renderPlayer1IntroArrow;
/* harmony export (immutable) */ __webpack_exports__["b"] = clearP1Score;
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

// const countdownTimer = document.querySelector(".countdown-timer");
const p1Score = document.querySelector(".p1-score");
const arrows = Array.from(document.querySelectorAll(".arrow"));
// const start = document.querySelector(".start-button");
// start.addEventListener("click",() =>{
//   startGamePlayer1();
// });

// let timeLeft = 30;
// countdownTimer.innerHTML = timeLeft;

let p1ScoreCount = 0;
let streakCount = 0;
p1Score.innerHTML = p1ScoreCount;

let userInput;
let currentArrow;

document.addEventListener("keydown", afterP1Input);

// function startGamePlayer1() {
//   start.className = "hidden";
//   renderArrow();
//   timer();
// }

// let timer = () => {
//   const interval = setInterval(function() {
//     if (timeLeft <= 0 ) {
//       clearInterval(interval);
//       window.alert (`Time is up, your score was ${p1ScoreCount}`);
//       return interval;
//     }
//     --timeLeft;
//     countdownTimer.innerHTML = timeLeft;
//     }, 1000);
// };

function afterP1Input(e) {
  handleKeyDown(e);
  if (userInput) {
    if (checkCorrectAnswer()) {
      renderPlayer1Arrow();
      correctAnswerTransition();
      handleCorrectAnswer();
    }else {
      incorrectAnswerAnimation();
      handleWrongAnswer();
    }
    p1Score.innerHTML = p1ScoreCount;
    userInput = undefined;
  }
}

function handleCorrectAnswer() {
  if (streakCount <= 20) {
    streakCount += 10;
  }
  p1ScoreCount += streakCount;
}

function handleWrongAnswer() {
  streakCount = 0;
  if (p1ScoreCount > 0) {
    p1ScoreCount -= 10;
  }
}

function renderPlayer1Arrow() {
  currentArrow = allArrowsArr[getRandomInt(0,8)];
  arrows[0].innerHTML = allArrows[currentArrow];
}

function renderPlayer1IntroArrow() {
  currentArrow = allArrowsArr[6];
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

function correctAnswerTransition() {
  arrows[0].classList.add("correct-answer");
  setTimeout(function(){
    arrows[0].classList.remove("correct-answer");
  },150);
}

function incorrectAnswerAnimation() {
  arrows[0].classList.add("incorrect-answer");
  setTimeout(function(){
    arrows[0].classList.remove("incorrect-answer");
  },150);
}

function clearP1Score() {
  p1ScoreCount = 0;
}

function getRandomInt(min, max) {
  min = min;
  max = max ;
  return Math.floor(Math.random() * (max-min)) + min;
}


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = afterP2Input;
/* harmony export (immutable) */ __webpack_exports__["c"] = renderPlayer2Arrow;
/* harmony export (immutable) */ __webpack_exports__["d"] = renderPlayer2IntroArrow;
/* harmony export (immutable) */ __webpack_exports__["b"] = clearP2Score;
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

// const countdownTimer = document.querySelector(".countdown-timer");
const p2Score = document.querySelector(".p2-score");
const arrows = Array.from(document.querySelectorAll(".arrow"));
const start = document.querySelector(".start-button");
// start.addEventListener("click",() =>{
//   startGamePlayer2();
// });

// let timeLeft = 30;
// countdownTimer.innerHTML = timeLeft;

let scoreCount = 0;
let streakCount = 0;
p2Score.innerHTML = scoreCount;

let userInput;
let currentArrow;

document.addEventListener("keydown", afterP2Input);

// function startGamePlayer2() {
//   start.className = "hidden";
//   renderArrow();
//   timer();
// }

// let timer = () => {
//   const interval = setInterval(function() {
//     if (timeLeft <= 0 ) {
//       clearInterval(interval);
//       window.alert (`Time is up, your score was ${scoreCount}`);
//       return interval;
//     }
//     --timeLeft;
//     countdownTimer.innerHTML = timeLeft;
//     }, 1000);
// };

function afterP2Input(e) {
  handleKeyDown(e);
  if (userInput) {
    if (checkCorrectAnswer()) {
      renderPlayer2Arrow();
      correctAnswerTransition();
      handleCorrectAnswer();
    }else {
      incorrectAnswerAnimation();
      handleWrongAnswer();
    }
    p2Score.innerHTML = scoreCount;
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

function renderPlayer2Arrow() {
  currentArrow = allArrowsArr[getRandomInt(0,8)];
    arrows[1].innerHTML = allArrows[currentArrow];
}

function renderPlayer2IntroArrow() {
  currentArrow = allArrowsArr[2];
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

function correctAnswerTransition() {
  arrows[1].classList.add("correct-answer");
  setTimeout(function(){
    arrows[1].classList.remove("correct-answer");
  },155);
}

function incorrectAnswerAnimation() {
  arrows[1].classList.add("incorrect-answer");
  setTimeout(function(){
    arrows[1].classList.remove("incorrect-answer");
  },150);
}

function clearP2Score() {
  scoreCount = 0;
}

function getRandomInt(min, max) {
  min = min;
  max = max ;
  return Math.floor(Math.random() * (max-min)) + min;
}


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map