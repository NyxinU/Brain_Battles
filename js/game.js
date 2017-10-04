import { renderPlayer1Arrow, } from "./left_side_arrow";
import { renderPlayer2Arrow, } from "./right_side_arrow";

const p1Score = document.querySelector(".p1-score");
const p2Score = document.querySelector(".p2-score");

const start = document.querySelector(".start-button");
start.addEventListener("click",() =>{
  start.className = "hidden";

  timer(3, function() {
    startGamePlayer1();
    startGamePlayer2();
    timer(3, function () {
      countdownTimer.innerHTML = 0;
      setTimeout(function() {
        console.log("game over");
      },1000);
    });
  });
});

const countdownTimer = document.querySelector(".countdown-timer");
let timeLeft = null;

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
