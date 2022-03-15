//define sprite location, make x and y axis a constant?

//add event listener for 'spacebar'

//add X axis gradual slide
//add clear zone , add 1 point!
//else 'GG' and restart on tap

let bird = document.querySelector('.bird')
let playArea = document.querySelector('.playArea')
let ground = document.querySelector('.ground')
let sky = document.querySelector('.sky')



//position bird
let birdLeft = 220;
let birdBottom = 150;
let gravity = 3;

//startGame , bird will fall, with interval set
let startGame = function () {
  birdBottom -= gravity;
  bird.style.bottom = birdBottom + 'px';
  bird.style.left = birdLeft + 'px';
}
// let timeID = setInterval(startGame, 20);

//jump
let jump = function (e) {
  birdBottom += 50;
  bird.style.bottom = birdBottom + 'px'
}

document.addEventListener('keypress', jump)
