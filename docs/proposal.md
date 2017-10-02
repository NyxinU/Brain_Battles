# Brain Battles
## Background and Overview
Brain Battles is a 2 player game in which players are complete in brain training games.
### Heads or Tails
* Depending on the color of the background the player will have to press the key that corresponds with the direction of the arrow or the opposite.
* Players will be rewarded more points for being on a streak and will lose points for incorrect inputs
* The direction of the arrow will change even if the player presses the wrong input
* Game will last 30 secs
## Functionality & MVP
* Render arrows that have a random direction(up, down, left, right) and color(blue, red)
* Arrows will change direction and color on keypress
* Will register whether the key pressed matches the conditions for the arrow displayed
* Live counter of player's score
* Display winner and score after each round
* Reset the game without refresh
* 2 players play simultaneously on one device
* Style so game is visually appealing
## Wireframes
### Instructional page
![](http://res.cloudinary.com/dhsavotqt/image/upload/v1506910696/Screen_Shot_2017-10-01_at_7.17.26_PM_qgufap.png)
### Gameplay
![](http://res.cloudinary.com/dhsavotqt/image/upload/v1506910695/Screen_Shot_2017-10-01_at_7.17.41_PM_ec6hkr.png)
### Score Page
![](http://res.cloudinary.com/dhsavotqt/image/upload/v1506910696/Screen_Shot_2017-10-01_at_7.17.46_PM_ewwzuz.png)
### Architecture and Technologies
* Vanilla JS for overall structure, game logic and DOM manipulation and rendering
* Webpack to bundle and serve up various scripts
### Bonus/Future Direction
* More mini games
* Allow players to play on their own device via LAN
