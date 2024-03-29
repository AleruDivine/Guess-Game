'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'correct number!';
// console.log(document.querySelector('.message').textContent

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;


const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
} 
 // document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess);

  document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';

    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#855e84';
    document.querySelector('.number').style.width = '15rem';
  });

  if (!guess) {
    displayMessage('No Number!')
  } else if (guess === secretNumber) {
    displayMessage('Correct Number!')
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highScore)
{highScore = score}
document.querySelector('.highscore').textContent = highScore;
} 
else if (guess !== secretNumber) {
  if (score > 0) {
    document.querySelector('.message').textContent = guess > secretNumber ? 'Too high!' : 'Too Low!';
    score = score - 1;
    document.querySelector('.score').textContent = score;
  } else {
    displayMessage('Game Over!')
    document.querySelector('.score').textContent = 0;
  }
}

else if (guess > secretNumber) {
    if (score > 0) {
      displayMessage('Too High')
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('Game Over!')
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 0) {
      displayMessage('Too low!')
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('Game Over')
      document.querySelector('.score').textContent = 0;
    }
  }
});