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

const arrow = document.querySelector(".arrow");

window.onclick = setArrow;
window.addEventListener("keydown", keydown);

function keydown(e) {
  let input = undefined;
  const keyCode = e.keyCode;
  switch (keyCode) {
    case 37:
      input = "left";
      console.log(input);
        break;
    case 38:
      input = "up";
      console.log(input);
        break;
    case 39:
      input = "right";
      console.log(input);
        break;
    case 40:
      input = "down";
      console.log(input);
        break;
    default:
  }
}

function setArrow() {
  let currentArrow = allArrowsArr[getRandomInt(0,8)];
  arrow.innerHTML = allArrows[currentArrow];
}

function getRandomInt(min, max) {
  min = min;
  max = max ;
  return Math.floor(Math.random() * (max-min)) + min;
}
