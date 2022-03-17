//add X axis gradual slide
//add clear zone , add 1 point!
//else 'GG' and restart on tap

let bird = document.querySelector('.bird')
let playArea = document.querySelector('.playArea')
let ground = document.querySelector('.ground')
let sky = document.querySelector('.sky')
// console.log(ground.getBoundingClientRect())
let button = document.querySelector('.newGame')




let startGame = function () {
  //position bird
  let birdLeft = 220;
  let birdBottom = 150;
  let gravity = 3;

  //startGame , bird will be placed, with number of pixels specificed
  let birdFall = function () {
    birdBottom -= gravity;
    bird.style.bottom = birdBottom + 'px';
    bird.style.left = birdLeft + 'px';
 
    if (birdBottom <= 0) {
      // console.log('hit bottom');
      // clearInterval(birdFallInterval);
      // clearInterval(makePollInterval)
      gameOver();
    }
  }


  //jump function + spacebar jump only
  let jump = function () {
    if (birdBottom < 420) {
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
  
    // move the created poles , remove when reach end of screen
    movePoles = function () {
      if (obstacleLeft === -60) {
        obstacle.remove()
      }
      else {
        obstacleLeft -= 2;
        obstacle.style.left = obstacleLeft + 'px'
      }
    }
  
    setInterval(movePoles, 20)
  }

  //game over

  let gameOver = function () {
    console.log('hit bottom');
    clearInterval(birdFallInterval);
    clearInterval(makePollInterval)
  }

  let birdFallInterval = setInterval(birdFall , 20)
  let makePollInterval = setInterval(makePoles, 2000)

}



button.addEventListener('click' , startGame)