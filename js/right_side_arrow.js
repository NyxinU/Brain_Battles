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

export function afterP2Input(e) {
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

export function renderPlayer2Arrow() {
  currentArrow = allArrowsArr[getRandomInt(0,8)];
    arrows[1].innerHTML = allArrows[currentArrow];
}

export function renderPlayer2IntroArrow() {
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

export function clearP2Score() {
  scoreCount = 0;
}

function getRandomInt(min, max) {
  min = min;
  max = max ;
  return Math.floor(Math.random() * (max-min)) + min;
}
