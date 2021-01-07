let playerScore = 0;
let computerScore = 0;
let gamesPlayed = 0;
let numberOfRounds = 1;

//play(computerPlay());

const playerScoreDisplay = document.querySelector("#playerScore");
playerScoreDisplay.textContent = playerScore;

const computerScoreDisplay = document.querySelector("#computerScore");
computerScoreDisplay.textContent = computerScore;

const resetButton = document.querySelector("reset");
resetButton.addEventListener("click", reset());

const shieldButton = document.querySelector("#shieldButton");
const swordButton = document.querySelector("#swordButton");
const bowButton = document.querySelector("#bowButton");

function computerPlay() {
  let options = ["Rock", "Paper", "Scissors"];
  return options[randomNum(0, options.length - 1)];
}
function playerPlay() {
  let played = prompt("Input your play!", "");
  return normalizeString(played);
}

function play(computerPlay) {
  while (gamesPlayed < numberOfRounds) {
    let playerPlayed = playerPlay();
    if (playerPlayed === computerPlay) {
      console.log("It's a tie!");
    } else if (
      (playerPlayed === "Rock" && computerPlay === "Scissors") ||
      (playerPlayed === "Paper" && computerPlay === "Rock") ||
      (playerPlayed === "Scissors" && computerPlay === "Paper")
    ) {
      console.log("You win! " + playerPlayed + " beats " + computerPlay + "!");
      playerScore++;
      gamesPlayed++;
    } else {
      console.log("You lose! " + computerPlay + " beats " + playerPlayed + "!");
      computerScore++;
      gamesPlayed++;
    }
  }
  console.log("And the final score is:");
  if (playerScore === computerScore) {
    console.log("Tie!");
  } else if (playerScore > computerScore) {
    console.log(
      "You win! \n Player: " + playerScore + " Computer: " + computerScore
    );
  } else {
    console.log(
      "You lose! \n Player: " + playerScore + " Computer: " + computerScore
    );
  }
}

function reset() {
  playerScore = 0;
  computerScore = 0;
  gamesPlayed = 0;
  numberOfRounds = 1;
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

function sendArrow(num, winner) {
  const arrowDiv = document.createElement("div");

  arrowDiv.classList.add("");
}
