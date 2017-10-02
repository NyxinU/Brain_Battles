const dir_arrows = [
  '<i class="fa fa-arrow-circle-up" aria-hidden="true"></i>',
  '<i class="fa fa-arrow-circle-down" aria-hidden="true"></i>',
  '<iclass="fa fa-arrow-circle-left" aria-hidden="true"></i>',
  '<i class="fa fa-arrow-circle-right" aria-hidden="true"></i>',
];

const arrow = document.querySelector(".arrow");
const gameWindow = document.querySelector(".game-window");


arrow.innerHTML = dir_arrows[0];

function getRandomInt() {
  const min = 0;
  const max = 4 ;
  return Math.floor(Math.random() * (max-min)) + min;
}
