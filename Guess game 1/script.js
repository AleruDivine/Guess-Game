'use strict';
// Generate a random number between 1 and 20
const randomNumber = Math.floor(Math.random() * 20) + 1;

// Get references to HTML elements
const guessInput = document.getElementById("guessInput");
const guessButton = document.getElementById("guessButton");
const message = document.getElementById("message");
const score = document.getElementById("score");

let currentScore = 20;

// Add event listener to guess button
guessButton.addEventListener("click", function() {
  // Get user's guess from input field
  const guess = parseInt(guessInput.value);

  // Check if guess is valid
  if (guess >= 1 && guess <= 20) {
    // Check if guess is correct
    if (guess === randomNumber) {
      message.textContent = "Congratulations, you guessed the number!";
      guessInput.disabled = true;
      guessButton.disabled = true;
    } else {
      message.textContent = "Sorry, that's not the right number.";
      currentScore--;
      score.textContent = currentScore;
    }
  } else {
    message.textContent = "Please enter a number between 1 and 20.";
  }

  // Clear the input field
  guessInput.value = "";
});