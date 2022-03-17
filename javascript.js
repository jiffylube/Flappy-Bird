//add X axis gradual slide
//add clear zone , add 1 point!
//else 'GG' and restart on tap

let bird = document.querySelector('.bird')
let playArea = document.querySelector('.playArea')
let ground = document.querySelector('.ground')
let sky = document.querySelector('.sky')
let newGame = document.querySelector('.newGame')
console.log(ground.getBoundingClientRect())

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


//jump function + spacebar jump only
let jump = function () {
  if (birdBottom < 400) {
    birdBottom += 50;
    bird.style.bottom = birdBottom + 'px'
    // bird.style.maxHeight = window.innerHeight;
    // console.log(birdBottom);
  }
}

let spaceBar = function (e) {
  if (e.keyCode === 32) {
    jump()
  }
}

document.addEventListener('keypress', spaceBar)


//add crash zones

let makePoles = function () {
  let obstacleLeft = 500
  let randomHeight = Math.random() * 200
  let obstacleBottom = randomHeight
  const obstacle = document.createElement('div')
  obstacle.classList.add('pole')
  playArea.appendChild(obstacle);
  obstacle.style.left = obstacleLeft + 'px'
  obstacle.style.bottom = obstacleBottom + 'px'
  obstacle.style.top = randomHeight
  
  // move the created poles   
  movePoles = function () {
    if (obstacleLeft === 0) {
      obstacle.remove()
    }
    else {
      obstacleLeft -= 2;
      obstacle.style.left = obstacleLeft + 'px'
    }
  }
  
  setInterval(movePoles , 20)
}


let timeID = setInterval(() => {
  //compare players y to 509
  startGame();
}, 20);
setInterval(makePoles , 1400)