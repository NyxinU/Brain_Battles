# Brain Battles
[Live](https://nyxinu.github.io/Brain_Battles/)
### Overview
Brain Battles is a game that improves reaction time and physiologically changes your brain by inducing the creation of new neural pathways.

You compete against another player to see how quickly you can recognize a certain pattern and adjust to changing conditions.

### Technologies
* Vanilla `Javascript` for overall structure and game logic,
* `HTML5` for DOM manipulation and rendering,
* `CSS` to design layout and style elements.

### Features
**Play with friends**

![](http://res.cloudinary.com/dhsavotqt/image/upload/v1507316260/brain_battles_gif_vxrkfv.gif)
### Code snippets
I rewarded players for maintaining a streak and subtracted points and reset the streak on incorrect input.
```javascript
function handleCorrectAnswer() {
  if (streakCount <= 20) {
    streakCount += 10;
  }
  p1ScoreCount += streakCount;
}

function handleWrongAnswer() {
  streakCount = 0;
  if (p1ScoreCount > 0) {
    p1ScoreCount -= 10;
  }
}
```
Animations for correct and incorrect answers.
``` css 
.correct-answer {
  transform: scale(1.07, 1.07);
  transition: transform 140ms ease-out
}

.incorrect-answer {
  animation: shake .08s ease 0s infinite;
}

@keyframes shake {
  0% {transform: translate(-17px,0px)};
  33% {transform: translate(17px,0px)};
  66% {transform: translate(-17px,0px)};
  100% {transform: translate(17px,0px)};
}
```
Core logic of the game was broken down into single functions to follow Single Responsiblity Principle.
``` javascript
export function afterP1Input(e) {
  handleKeyDown(e);
  if (userInput) {
    if (checkCorrectAnswer()) {
      renderPlayer1Arrow();
      correctAnswerTransition();
      handleCorrectAnswer();
    }else {
      incorrectAnswerAnimation();
      handleWrongAnswer();
    }
    p1Score.innerHTML = p1ScoreCount;
    userInput = undefined;
  }
}
```
## Future Directions
* Time attack game mode
* More games
* Play against an AI
* Allow players to play together over LAN
