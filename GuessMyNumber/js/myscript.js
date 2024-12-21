'use strict';

/** The Constants */
const MESSAGE_ET = document.querySelector('.message');
const SCORE_ET = document.querySelector('.score');
const HIGH_SCORE_ET = document.querySelector('.highscore');
const NUMBER_ET = document.querySelector('.number');
const BODY_ET = document.querySelector('body');
const CHECK_BTN_ET = document.querySelector('.check');
const PLAY_AGAIN_BTN_ET = document.querySelector('.playagain');
const BTWN_MSG_BTN_ET = document.querySelector('.between_message');
const GUESS_MIN_NUMBER = 1;
const GUESS_MAX_NUMBER = 100;
const SECRET_NUMBER = Math.trunc(Math.random() * GUESS_MAX_NUMBER) + 1;

/** THE MESSAGES OF GAME */
const MESSAGES = [
  `⛔ Please select the number between ${GUESS_MIN_NUMBER} to ${GUESS_MAX_NUMBER}`,
  '📈 Too High !',
  '📉 Too Low !',
  '✅ Correct Number You Won !',
  '😌 You Lost the game!',
];

/** THE STATE OF GAME */
const GAME_STATE = ['LOST', 'WON', 'PLAYING'];

/** Value Initialization */
let score = GUESS_MAX_NUMBER / 5;
SCORE_ET.textContent = score;
BTWN_MSG_BTN_ET.textContent = `[ Between ${GUESS_MIN_NUMBER} to ${GUESS_MAX_NUMBER} ]`;
let gameState = GAME_STATE[2];
let highScore = 0;

/** Adding Check Button click Listener */
CHECK_BTN_ET.addEventListener('click', function () {
  if (gameState === GAME_STATE[2]) {
    let guessText = document.querySelector('.guess').value;

    if (guessText !== '') {
      let guessNumber = Number(guessText);
      if (guessNumber < GUESS_MIN_NUMBER || guessNumber > GUESS_MAX_NUMBER) {
        MESSAGE_ET.textContent = MESSAGES[0];
      } else if (guessNumber > SECRET_NUMBER) {
        score--;
        MESSAGE_ET.textContent = MESSAGES[1];
      } else if (guessNumber < SECRET_NUMBER) {
        score--;
        MESSAGE_ET.textContent = MESSAGES[2];
      } else if (guessNumber === SECRET_NUMBER) {
        showGameResult(1);
      }

      if (score <= 0) {
        showGameResult(0);
      }
      SCORE_ET.textContent = score;
    }
  }
});

function showGameResult(stateIndex) {
  if (stateIndex === 1) {
    BODY_ET.style.backgroundColor = '#60b347';
    MESSAGE_ET.textContent = MESSAGES[3];
    NUMBER_ET.textContent = SECRET_NUMBER;
    if (score > highScore) {
      highScore = score;
      HIGH_SCORE_ET.textContent = highScore;
      localStorage.setItem('highScore', highScore);
    }
  } else {
    MESSAGE_ET.textContent = MESSAGES[4];
    BODY_ET.style.backgroundColor = '#ff0000';
    NUMBER_ET.textContent = SECRET_NUMBER;
    score = 0;
    gameState = 'LOST';
  }
  gameState = GAME_STATE[stateIndex];
  NUMBER_ET.textContent = SECRET_NUMBER;
}

/** Adding click listener to Play Again Button */
PLAY_AGAIN_BTN_ET.addEventListener('click', function () {
  window.location.reload();
});

/** Adding onload listener to BODY */
BODY_ET.onload = function () {
  let hsValue = localStorage.getItem('highScore');
  if (hsValue == null) {
    localStorage.setItem('highScore', highScore);
  } else {
    highScore = Number(hsValue);
  }
  HIGH_SCORE_ET.textContent = highScore;
};
