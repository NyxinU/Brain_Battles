import { renderPlayer1Arrow, renderPlayer1IntroArrow, afterP1Input, clearP1Score,  } from "./left_side_arrow";
import { renderPlayer2Arrow, renderPlayer2IntroArrow, afterP2Input, clearP2Score } from "./right_side_arrow";

const gameHeader = document.querySelector(".game-header");
const p1Score = document.querySelector(".p1-score");
const p2Score = document.querySelector(".p2-score");
const timerWrapper = document.querySelector(".timer-wrapper");
const countdownTimer = document.querySelector(".countdown-timer");
const demo = document.querySelector(".demo");
const whiteBackgroundArrow = Array.from(document.querySelectorAll(".white-background-arrow"));
const arrows = Array.from(document.querySelectorAll(".arrow"));
const instructions = document.querySelector(".instructions");
const start = document.querySelector(".start-button");
const interactiveTutorial = document.querySelector(".interactive-tutorial");
const interactiveTutorialGoal = document.querySelector(".interactive-tutorial-goal");



// starting state
renderPlayer1IntroArrow();
renderPlayer2IntroArrow();
let timeLeft = 0;
//

start.addEventListener("click",() =>{
  hideIntroElements();
  timer(3, function() {
    unhideArrows();
    startGamePlayer1();
    startGamePlayer2();
    timer(30, function () {
      countdownTimer.innerHTML = 0;
      setTimeout(function() {
        clearArrows();
        showPlayAgain();
        displayWinner();
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
  renderPlayer1Arrow();
}

function startGamePlayer2() {
  renderPlayer2Arrow();
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
  document.removeEventListener("keydown", afterP1Input);
  document.removeEventListener("keydown", afterP2Input);
}

function unhideArrows() {
  document.addEventListener("keydown", afterP1Input);
  document.addEventListener("keydown", afterP2Input);
}

function resetScore() {
  p1Score.innerHTML = 0;
  p2Score.innerHTML = 0;
  clearP1Score();
  clearP2Score();
}

function showPlayAgain() {
  start.innerHTML = "Play Again";
  start.className = "start-button";
  start.classList.remove("hidden");
}

function displayWinner() {
  const player1Score = parseInt(p1Score.innerHTML);
  const player2Score = parseInt(p2Score.innerHTML);

  if (player1Score === player2Score) {
    arrows[0].innerHTML = "<span style='font-size:50px'>Draw</span>";
    arrows[1].innerHTML = "<span style='font-size:50px'>Draw</span>";
  }else if (player1Score > player2Score) {
    arrows[0].innerHTML = "<span style='font-size:50px'>You Win!</span>";
    arrows[1].innerHTML = "<span style='font-size:50px'>You Lose</span>";
  }else if (player1Score < player2Score) {
    arrows[1].innerHTML = "<span style='font-size:50px'>You Win!</span>";
    arrows[0].innerHTML = "<span style='font-size:50px'>You Lose</span>";
  }
}

function hideIntroElements() {
  start.className = "hidden";
  timerWrapper.classList.remove("hidden");
  interactiveTutorial.innerHTML = "";
  interactiveTutorialGoal.innerHTML = "";
  removeTitle();
  resetScore();
  clearArrows();
  gameHeader.classList.remove("hidden");
}
