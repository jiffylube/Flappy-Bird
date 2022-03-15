//add foreground
//add background

//define playArea
//define sprite location, make x and y axis a constant?
//will need to move this to default location after restart.

//default Y axis decrease for object

//create function that will increase Y axis for sprite (move up)
//add event listener for 'spacebar'

//add X axis gradual slide
//add clear zone , add 1 point!
//else 'GG' and restart on tap

let bird = document.querySelector('.bird')
let playArea = document.querySelector('.playArea')
let ground = document.querySelector('.ground')
let sky = document.querySelector('.sky')

let birdLeft = 220;
let birdBottom = 150;

let startGame = function () {
  bird.style.bottom = birdBottom + 'px';
}

startGame();