// Set score variables to 0
let wins = 0;
let losses = 0;

// Set guesses remaining to 10
let guessesLeft = 10;

// Set a new array "guessed" to an empty value
let guessed = [];

// Randomly choose a letter and assign to variable compGuess
function randomLetter() {
  var letters = "abcdefghijklmnopqurstuvwxyz";
  return letters.substr(Math.floor(Math.random() * 26), 1);
}

var compGuess = randomLetter();
console.log(compGuess);

// Listen for user's letter choice
document.onkeyup = function (event) {

  // Determines which key was pressed.
  var userGuess = event.key;

  // if the user's guess matches the computer's guess, increment wins by 1 and reset game at 10 guesses
  if (userGuess == compGuess) {
    wins++
    guessesLeft = 10;
    guessed = [];
  }

  // or else decrement remaining guesses by 1
  else {
    guessesLeft--;
  }

  // when guesses decreases to 0, increment losses by 1, reset the guessed array to empty, reset guesses to 10
  if (guessesLeft == 0) {
    losses++;
    guessed = [];
    guessesLeft = 10;
  }

  // if index of guessed array is greater than or equal to 0, do nothing
  if (guessed.indexOf(userGuess) >= 0) {

  }

  // or else push guessed letters into the array
  else {
    guessed.push(userGuess);
    document.getElementById("guessed").innerHTML = "Your Guesses So Far: " + guessed;
    console.log(guessed);
  }

  // render the results in HTML and display to the user
  document.getElementById("wins").innerHTML = "Wins: " + wins;
  document.getElementById("losses").innerHTML = "Losses: " + losses;
  document.getElementById("guesses").innerHTML = "Guesses Left: " + guessesLeft;

};