const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
const resultDisplay = document.getElementById("results");
const computerDescion = document.getElementById("computer-descion");
const options = ["rock", "paper", "scissors"];

let computerChoice;

let playerPoints = 0;
let computerPoints = 0;

rock.addEventListener("click", (event) => {
  playRound();
  if (computerChoice === "rock") {
    resultDisplay.textContent = "Wow its a tie";
  } else if (computerChoice === "scissors") {
    resultDisplay.textContent = "You win!!";
    playerPoints += 1;
    playerScore.textContent = `Player Score: ${playerPoints}`;
  } else {
    resultDisplay.textContent = "Try again";
    computerPoints += 1;
    computerScore.textContent = `Computer Score: ${computerPoints}`;
  }
  computerDescion.textContent = `The Computer Picked ${computerChoice}`;
});

paper.addEventListener("click", (event) => {
  playRound();
  if (computerChoice === "paper") {
    resultDisplay.textContent = "Wow its a tie";
  } else if (computerChoice === "rock") {
    resultDisplay.textContent = "You win!!";
    playerPoints += 1;
    playerScore.textContent = `Player: ${playerPoints}`;
  } else {
    resultDisplay.textContent = "Try again";
    computerPoints += 1;
    computerScore.textContent = `Computer Score: ${computerPoints}`;
  }
  computerDescion.textContent = `The Computer Picked ${computerChoice}`;
});

scissors.addEventListener("click", (event) => {
  playRound();
  if (computerChoice === "scissors") {
    resultDisplay.textContent = "Wow its a tie";
  } else if (computerChoice === "paper") {
    resultDisplay.textContent = "You win!!";
    playerPoints += 1;
    playerScore.textContent = `Player Score: ${playerPoints}`;
  } else {
    resultDisplay.textContent = "Try again";
    computerPoints += 1;
    computerScore.textContent = `Computer: ${computerPoints}`;
  }
  computerDescion.textContent = `The Computer Picked ${computerChoice}`;
});

function playRound() {
  const number = Math.floor(Math.random() * options.length);
  computerChoice = options[number];
  console.log(number);
  console.log(computerChoice);
}
