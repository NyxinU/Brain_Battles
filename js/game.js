import { renderPlayer1Arrow } from "./left_side_arrow";
import "./right_side_arrow";

const start = document.querySelector(".start-button");
start.addEventListener("click",() =>{
  startGamePlayer1();
});

const countdownTimer = document.querySelector(".countdown-timer");
let timeLeft = 30;
countdownTimer.innerHTML = timeLeft;

let timer = () => {
  const interval = setInterval(function() {
    if (timeLeft <= 0 ) {
      clearInterval(interval);
      window.alert (`Time is up, your score was ${scoreCount}`);
      return interval;
    }
    --timeLeft;
    countdownTimer.innerHTML = timeLeft;
    }, 1000);
};

function startGamePlayer1() {
  start.className = "hidden";
  renderPlayer1Arrow();
  timer();
}
