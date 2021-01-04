let playerScore = 0;
let computerScore = 0;
let gamesPlayed = 0;
console.log("something");

console.log(computerPlay());
//console.log(playerPlay());
play(computerPlay());

function computerPlay() {
  let options = ["Rock", "Paper", "Scissors"];
  return options[randomNum(0, options.length - 1)];
}
function playerPlay() {
  let played = prompt("Input your play!", "");
  return normalizeString(played);
}

function play(computerPlay) {
  while (gamesPlayed < 5) {
    let playerPlayed = playerPlay();
    if (playerPlayed === computerPlay) {
      console.log("It's a tie!");
    } else if (playerPlayed === "Rock" && computerPlay === "Scissors") {
      console.log("You win!");
      playerScore++;
      gamesPlayed++;
    } else {
      console.log("You lose!");
      computerScore++;
      gamesPlayed++;
    }
    displayScores();
  }
  console.log("And the final score is:");
  if (playerScore === computerScore) {
    console.log("Tie!");
  } else if (playerScore > computerScore) {
    console.log("You win! " + playerScore + " to " + computerScore);
  } else {
    console.log("You lose! " + playerScore + " to " + computerScore);
  }
}

function displayScores() {
  console.log("Current scores:");
  console.log("Player: " + playerScore);
  console.log("Computer: " + computerScore);
}

function normalizeString(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
