var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r",
"s", "t", "u", "v", "w", "x", "y", "z"];
var wins = document.getElementById("wins");
var losses = document.getElementById("losses");
var guessesRemaining = document.getElementById("guessesRemaining");
var guessesSoFar = document.getElementById("guessesSoFar");


document.onkeyup = function(event) {
    var userGuess = event.key;
  
    var computerGuess =
      computerChoices[Math.floor(Math.random() * computerChoices.length)];
    
    if (userGuess === computerGuess){
        
    }
}