'use strict';

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input
  if (!guess) {
    displayMessage('⛔ No number!');

    //When player wins
  } else if (guess === number) {
    displayMessage('🎉 Correct number!');
    document.querySelector('.number').textContent = number;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    //When guess is wrong
  } else if (guess !== number) {
    if (score > 1) {
      displayMessage(guess > number ? '⬆️ Too high!' : '⬇️ Too low!');
      score--;
      displayScore(score);
    } else {
      displayMessage('😞 You lost the game!');
      displayScore(0);
    }
  }
});

//Again button
document.querySelector('.again').addEventListener('click', function () {
  number = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  displayMessage('Start guessing...');
  displayScore(score);
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
