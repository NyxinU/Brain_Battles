import { renderPlayer1Arrow, afterP1Input } from "./left_side_arrow";
import { renderPlayer2Arrow, afterP2Input } from "./right_side_arrow";

const scoreDiv = document.querySelector(".score-div");
const p1Score = document.querySelector(".p1-score");
const p2Score = document.querySelector(".p2-score");
const countdownTimer = document.querySelector(".countdown-timer");
const arrows = Array.from(document.querySelectorAll(".arrow"));
const start = document.querySelector(".start-button");
// document.addEventListener("keydown", afterP1Input);
// document.addEventListener("keydown", afterP2Input);

// starting state
scoreDiv.className = "hidden";
renderPlayer1Arrow();
renderPlayer2Arrow();
let timeLeft = null;
//

start.addEventListener("click",() =>{
  start.className = "hidden";
  scoreDiv.classList.remove("hidden");
  clearArrows();
  timer(3, function() {
    unhideArrows();
    startGamePlayer1();
    startGamePlayer2();
    timer(3, function () {
      countdownTimer.innerHTML = 0;
      setTimeout(function() {
        console.log("game over");
        clearArrows();
        start.innerHTML = "Play Again";
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
