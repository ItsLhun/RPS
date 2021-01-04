const numberOfGames = 5;
let playerScore = 0;
let npc = 0;

function (playerPlay, npcPlay){
    if (normalizeString(playerPlay) === npcPlay){
        console.log("It's a tie!");
    }
    if ((normalizeString(playerPlay) === "Rock") && npcPlay === "Scissors"){
        console.log("Congratulations! ");
        playerScore++;
    }
}
let variable = prompt("input String", "");
console.log(normalizeString(variable));

function normalizeString(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}
