// store game choices in an array
const gameChoices = ["rock", "paper", "scissors"];

// the function will randomize choices using the indices of the array
function getComputerChoice() {
  return gameChoices[Math.floor(Math.random() * gameChoices.length)];
}

console.log(getComputerChoice());
