var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r",
  "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var lettersGuessed = "";
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

function reset() {
  computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
  guessesLeft = 9;
  lettersGuessed = "";
}

document.onkeyup = function (event) {
  var userGuess = event.key;
  if (computerChoices.includes(userGuess)) {
    console.log("User Guess: ", userGuess);
    console.log("Computer Guess: ", computerGuess);
    if (userGuess === computerGuess) {
      wins++;
      reset();
    } else {
      guessesLeft--;
      lettersGuessed = lettersGuessed + ", " + userGuess;
      if (guessesLeft === 0) {
        losses++;
        reset();
      }
    }

    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;
    document.getElementById("guesses-left").innerHTML = guessesLeft;
    document.getElementById("guesses-so-far").innerHTML = lettersGuessed;
  }
}