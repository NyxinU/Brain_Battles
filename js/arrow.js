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

const score = document.querySelector(".score");
let scoreCount = 0;
let streakCount = 0;
score.innerHTML = scoreCount;

const arrow = document.querySelector(".arrow");
let userInput;
let currentArrow;

const start = document.querySelector(".start-button");

start.onclick=renderArrow;
document.addEventListener("keydown", afterUserInput);

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
  arrow.innerHTML = allArrows[currentArrow];
}

function handleKeyDown(e) {
  e.preventDefault();
  const keyCode = e.keyCode;
  switch (keyCode) {
    case 37:
    case 65:
      userInput = "left";
      break;
    case 38:
    case 87:
      userInput = "up";
      break;
    case 39:
    case 68:
      userInput = "right";
      break;
    case 40:
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
