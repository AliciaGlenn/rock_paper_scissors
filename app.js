// Constants & Variables //

// store game choices in an array
const gameChoices = ["rock", "paper", "scissors"];

// prompt user for input and store in a variable + removed case sensitivity
// let playerInput = prompt("Make Your Selection").toLowerCase();
// let playerSelection = playerInput;
let computerSelection = getComputerChoice();

// FUNCTIONS //
// the function will randomize choices using the indices of the array
function getComputerChoice() {
  return gameChoices[Math.floor(Math.random() * gameChoices.length)];
}

//compares player input and computer input to determine winner
function gameRounds(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    // alert("It's a tie!");
    console.log("it's a tie");
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    // alert("You win! Rock beats Paper");
    console.log("You win! Rock beats Paper");
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    // alert("You win! Rock beats scissors");
    console.log("You win! Rock beats scissors");
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    // alert("You loose! Rock beats scissors");
    console.log("You loose! Rock beats scissors");
  } else if ((playerSelection == "scissors") & (computerSelection == "paper")) {
    // alert("You win! Scissors beats paper");
    console.log("You win! Scissors beats paper");
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    // alert("You lose! Rock beats paper");
    console.log("You lose! Rock beats paper");
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    // alert("You lose! Scissors beats paper");
    console.log("You lose! Scissors beats paper");
  } else {
    // alert("you broke the game!");
    console.log("you broke the game!");
  }
}

const playerSelection = "rock";
console.log(gameRounds(playerSelection, computerSelection));
