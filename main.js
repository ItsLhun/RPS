let playerScore = 0;
let computerScore = 0;
let gamesPlayed = 0;
let numberOfRounds = 5;
let playing = false;

const playerScoreDisplay = document.querySelector("#playerScore");

const computerScoreDisplay = document.querySelector("#computerScore");
const finalResultDisplay = document.querySelector("#finalResult");

const resetButton = document.querySelector(".reset");
resetButton.addEventListener("click", (event) => {
  reset();
});

const shieldButton = document.querySelector("#shieldButton");
shieldButton.addEventListener("click", (event) => {
  play(computerPlay(), "Shield");
});

const swordButton = document.querySelector("#swordButton");
swordButton.addEventListener("click", (event) => {
  play(computerPlay(), "Sword");
});

const bowButton = document.querySelector("#bowButton");
bowButton.addEventListener("click", (event) => {
  play(computerPlay(), "Bow");
});

function computerPlay() {
  let options = ["Shield", "Sword", "Bow"];
  return options[randomNum(0, options.length - 1)];
}

function play(computerPlay, playerPlay) {
  const playResult = document.querySelector("#playResult");
  let playerPlayed = playerPlay;

  if (playerPlayed === computerPlay) {
    playResult.textContent =
      playerPlayed + " vs " + computerPlay + ". It's a tie!";
    updateScore();
  } else if (
    (playerPlayed === "Shield" && computerPlay === "Bow") ||
    (playerPlayed === "Sword" && computerPlay === "Shield") ||
    (playerPlayed === "Bow" && computerPlay === "Sword")
  ) {
    playResult.textContent =
      "You win a round!" + playerPlayed + " beats " + computerPlay;
    playerScore++;
    gamesPlayed++;
    updateScore();
  } else {
    playResult.textContent =
      "You lose a round! " + computerPlay + " beats " + playerPlayed;
    computerScore++;
    gamesPlayed++;
    updateScore();
  }

  if (gamesPlayed === numberOfRounds) {
    disableButtons();
    if (playerScore === computerScore) {
    } else if (playerScore > computerScore) {
      finalResultDisplay.textContent = "Congratulations, you Win!";
    } else {
      finalResultDisplay.textContent = " \n Sorry, you Lose!";
    }
    playing = false;
  }
}

function reset() {
  playerScore = 0;
  computerScore = 0;
  gamesPlayed = 0;
  numberOfRounds = 5;
  updateScore();
  playResult.textContent = "Press a key to start";
  finalResultDisplay.textContent = "";
  enableButtons();
}

function disableButtons() {
  swordButton.disabled = true;
  shieldButton.disabled = true;
  bowButton.disabled = true;
}

function enableButtons() {
  swordButton.disabled = false;
  shieldButton.disabled = false;
  bowButton.disabled = false;
}

function updateScore() {
  computerScoreDisplay.textContent = computerScore;
  playerScoreDisplay.textContent = playerScore;
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
