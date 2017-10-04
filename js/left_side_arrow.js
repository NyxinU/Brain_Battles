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

let scoreCount = 0;
let streakCount = 0;
p1Score.innerHTML = scoreCount;

let userInput;
let currentArrow;

document.addEventListener("keydown", afterUserInput);

// function startGamePlayer1() {
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

function afterUserInput(e) {
  handleKeyDown(e);
  if (userInput) {
    if (checkCorrectAnswer()) {
      handleCorrectAnswer();
      renderPlayer1Arrow();
    }else {
      handleWrongAnswer();
    }
    p1Score.innerHTML = scoreCount;
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

export function renderPlayer1Arrow() {
  currentArrow = allArrowsArr[getRandomInt(0,8)];
  // console.log(arrows);
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
