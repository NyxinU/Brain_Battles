import { renderPlayer1Arrow, renderPlayer1IntroArrow, afterP1Input, clearP1Score,  } from "./left_side_arrow";
import { renderPlayer2Arrow, renderPlayer2IntroArrow, afterP2Input, clearP2Score } from "./right_side_arrow";

const gameHeader = document.querySelector(".game-header");
const p1Score = document.querySelector(".p1-score");
const p2Score = document.querySelector(".p2-score");
const countdownTimer = document.querySelector(".countdown-timer");
const whiteBackgroundArrow = Array.from(document.querySelectorAll(".white-background-arrow"));
const arrows = Array.from(document.querySelectorAll(".arrow"));
const instructions = document.querySelector(".instructions");
const start = document.querySelector(".start-button");


// starting state
document.removeEventListener("keydown", afterP1Input);
document.removeEventListener("keydown", afterP2Input);

renderPlayer1IntroArrow();
renderPlayer2IntroArrow();
let timeLeft = 0;
//

start.addEventListener("click",() =>{
  start.className = "hidden";
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
