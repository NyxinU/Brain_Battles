import { renderPlayer1Arrow, } from "./left_side_arrow";
import { renderPlayer2Arrow, } from "./right_side_arrow";

const p1Score = document.querySelector(".p1-score");
const p2Score = document.querySelector(".p2-score");

const start = document.querySelector(".start-button");
start.addEventListener("click",() =>{
  start.className = "hidden";



  timer(4);
  setTimeout(function() {
    startGamePlayer1();
    startGamePlayer2();
    timer(11);
  },5000);
});



const countdownTimer = document.querySelector(".countdown-timer");
let timeLeft = null;
// countdownTimer.innerHTML = timeLeft;

let timer = (duration) => {
  timeLeft = duration;
  const interval = setInterval(function() {
    if (timeLeft <= 0 ) {
      clearInterval(interval);
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
