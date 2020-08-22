/** Javascript by Elmer G. Balbin Jr. */

const player = document.querySelector('.match__player');
const computer = document.querySelector('.match__computer');
let playerScore = 0;
let computerScore = 0;
const maxScore = 5;
let gameStatus;

const handsScreen = document.querySelector('.hands');
const matchScreen = document.querySelector('.match');

const rock = document.querySelector('.hands__rock');
const paper = document.querySelector('.hands__paper');
const scissors = document.querySelector('.hands__scissors');

const computerHandArray = ['rock', 'paper', 'scissors'];

let shakeProgress;

rock.addEventListener('click', function () {
  if (shakeProgress == true) {
    return;
  }
  highlightHand('rock');
  gameOn('rock');
});

paper.addEventListener('click', function () {
  if (shakeProgress == true) {
    return;
  }
  highlightHand('paper');
  gameOn('paper');
});

scissors.addEventListener('click', function () {
  if (shakeProgress == true) {
    return;
  }
  highlightHand('scissors');
  gameOn('scissors');
});

function highlightHand(currHand) {
  if (currHand == 'rock') {
    paper.classList.remove('active');
    scissors.classList.remove('active');
    rock.classList.add('active');
  } else if (currHand == 'paper') {
    rock.classList.remove('active');
    scissors.classList.remove('active');
    paper.classList.add('active');
  } else if (currHand == 'scissors') {
    rock.classList.remove('active');
    paper.classList.remove('active');
    scissors.classList.add('active');
  }
}

function gameOn(playerHand) {
  if (playerScore >= maxScore || computerScore >= maxScore) {
    playerScore = 0;
    computerScore = 0;
    document.querySelector('.score__player').innerHTML = playerScore;
    document.querySelector('.score__computer').innerHTML = computerScore;
    document.querySelector('.status').innerHTML = '';
    document.querySelector('.status').style.display = 'none';
  }
  shakeProgress = true;
  document.querySelector('.score__player__plus').classList.remove('add');
  document.querySelector('.score__computer__plus').classList.remove('add');
  setTimeout(function () {
    const playerHandIcon = player.querySelector('.far');
    playerHandIcon.classList.remove('fa-hand-paper', 'fa-hand-scissors');
    playerHandIcon.classList.add('fa-hand-rock');

    let random = Math.floor(Math.random() * computerHandArray.length);
    let computerHand = computerHandArray[random];
    const computerHandIcon = computer.querySelector('.far');
    computerHandIcon.classList.remove('fa-hand-paper', 'fa-hand-scissors');
    computerHandIcon.classList.add('fa-hand-rock');

    handsScreen.classList.add('ingame');
    matchScreen.style.display = 'flex';

    setTimeout(function () {
      player.classList.add('handShake');
      computer.classList.add('handShake');
    }, 500);

    setTimeout(function () {
      player.classList.remove('handShake');
      computer.classList.remove('handShake');

      /** Start Player hand */
      if (playerHand == 'rock') {
        playerHandIcon.classList.remove('fa-hand-paper', 'fa-hand-scissors');
      } else if (playerHand == 'paper') {
        playerHandIcon.classList.remove('fa-hand-rock', 'fa-hand-scissors');
        playerHandIcon.classList.add('fa-hand-paper');
      } else if (playerHand == 'scissors') {
        playerHandIcon.classList.remove('fa-hand-rock', 'fa-hand-paper');
        playerHandIcon.classList.add('fa-hand-scissors');
      }
      /** End Player hand */

      /** Start Computer hand */
      if (computerHand == 'rock') {
        computerHandIcon.classList.remove('fa-hand-paper', 'fa-hand-scissors');
      } else if (computerHand == 'paper') {
        computerHandIcon.classList.remove('fa-hand-rock', 'fa-hand-scissors');
        computerHandIcon.classList.add('fa-hand-paper');
      } else if (computerHand == 'scissors') {
        computerHandIcon.classList.remove('fa-hand-rock', 'fa-hand-paper');
        computerHandIcon.classList.add('fa-hand-scissors');
      }
      /** End Computer hand */

      /** Start Score calculation */
      if (playerHand == 'rock' && computerHand == 'paper') {
        computerScore++;
        document.querySelector('.score__computer__plus').classList.add('add');
      } else if (playerHand == 'rock' && computerHand == 'scissors') {
        playerScore++;
        document.querySelector('.score__player__plus').classList.add('add');
      } else if (playerHand == 'paper' && computerHand == 'rock') {
        playerScore++;
        document.querySelector('.score__player__plus').classList.add('add');
      } else if (playerHand == 'paper' && computerHand == 'scissors') {
        computerScore++;
        document.querySelector('.score__computer__plus').classList.add('add');
      } else if (playerHand == 'scissors' && computerHand == 'rock') {
        computerScore++;
        document.querySelector('.score__computer__plus').classList.add('add');
      } else if (playerHand == 'scissors' && computerHand == 'paper') {
        playerScore++;
        document.querySelector('.score__player__plus').classList.add('add');
      }

      if (playerScore >= maxScore) {
        document.querySelector('.status').innerHTML = 'YOU WIN!';
        document.querySelector('.status').style.color = '#008000';
        document.querySelector('.status').style.display = '';
      } else if (computerScore >= maxScore) {
        document.querySelector('.status').innerHTML = 'YOU LOSE!';
        document.querySelector('.status').style.color = '#ff0000';
        document.querySelector('.status').style.display = '';
      }

      document.querySelector('.score__player').innerHTML = playerScore;
      document.querySelector('.score__computer').innerHTML = computerScore;
      /** End Score calculation */

      shakeProgress = false;
      rock.classList.remove('active');
      paper.classList.remove('active');
      scissors.classList.remove('active');
    }, 1500);
  }, 200);
}
