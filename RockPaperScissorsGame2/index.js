const results = document.getElementById('results');
const playerDisplay = document.getElementById('player-display');
const computerDisplay = document.getElementById('computer-display');
const scores = document.getElementById('scores')
const options = ["rock", "paper", "scissors"];

let result;
let playerScore = 0;
let computerScore = 0;

function startGame(playerChoice) {
  const computerChoice = options[Math.floor(Math.random() * options.length)];
  if (playerChoice === computerChoice) {
    result = "Its a tie.";
  } else {
    switch (playerChoice) {
      case "rock":
        result = computerChoice === "scissors" ? "You Win!!" : "You Lose";
        break;
      case "paper":
        result = computerChoice === "rock" ? "You Win!!" : "You Lose";
        break;
      case "scissors":
        result = computerChoice === "paper" ? "You Win!!" : "You Lose";
        break;
    }
  }
  results.textContent = result;
  playerDisplay.textContent = `Player Chose ${playerChoice}`;
  computerDisplay.textContent =  `Computer Chose ${computerChoice}`;

  switch(result) {
    case "You Win!!":
      playerScore += 1;
      scores.textContent = `Player:${playerScore} - Computer:${computerScore}`;
      break;

    case "You Lose":
      computerScore += 1;
      scores.textContent = `Player:${playerScore} - Computer:${computerScore}`;
      break;
  }
}
