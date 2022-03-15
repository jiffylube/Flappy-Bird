//define sprite location, make x and y axis a constant?

//add event listener for 'spacebar'

//add X axis gradual slide
//add clear zone , add 1 point!
//else 'GG' and restart on tap

let bird = document.querySelector('.bird')
let playArea = document.querySelector('.playArea')
let ground = document.querySelector('.ground')
let sky = document.querySelector('.sky')
let newGame = document.querySelector('.newGame')


//position bird
let birdLeft = 220;
let birdBottom = 150;
let gravity = 2;


//startGame , bird will fall, with interval set
let startGame = function () {
  birdBottom -= gravity;
  bird.style.bottom = birdBottom + 'px';
  bird.style.left = birdLeft + 'px';
}

// let timeID = setInterval(startGame, 20);

//jump function + spacebar jump only
let jump = function () {
  if (birdBottom < 400) {
    birdBottom += 50;
    bird.style.bottom = birdBottom + 'px'
    // bird.style.maxHeight = window.innerHeight;
    console.log(birdBottom);
  }
}

let spaceBar = function (e) {
  if (e.keyCode === 32) {
    jump()
  }
}

document.addEventListener('keypress', spaceBar)
