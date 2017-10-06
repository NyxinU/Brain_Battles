# Brain Battles
[Live](http://www.brainbattles.xyz/)
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
I rewarded players for maintaining a streak and subtracted points and reset the streak on incorrect input
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
## Future Directions
* Time attack game mode
* More games
* Play against an AI
* Allow players to play together over LAN
