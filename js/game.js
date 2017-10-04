import { renderPlayer1Arrow, } from "./left_side_arrow";
import { renderPlayer2Arrow, } from "./right_side_arrow";

const p1Score = document.querySelector(".p1-score");
const p2Score = document.querySelector(".p2-score");

const start = document.querySelector(".start-button");
start.addEventListener("click",() =>{
  start.className = "hidden";
  startGamePlayer1();
  startGamePlayer2();
  timer();
});

const countdownTimer = document.querySelector(".countdown-timer");
let timeLeft = 5;
countdownTimer.innerHTML = timeLeft;

let timer = () => {
  const interval = setInterval(function() {
    if (timeLeft <= 0 ) {
      clearInterval(interval);
      window.alert (`Time is up p1 score is ${p1Score.innerHTML}, p2 score is ${p2Score.innerHTML}`);
      return interval;
    }
    --timeLeft;
    countdownTimer.innerHTML = timeLeft;
    }, 1000);
};

function startGamePlayer1() {
  renderPlayer1Arrow();
}

function startGamePlayer2() {
  renderPlayer2Arrow();
}
