document.addEventListener('DOMContentLoaded', () => {
  const choices = ['rock', 'paper', 'scissors'];
  let humanScore = 0;
  let computerScore = 0;
  let roundsPlayed = 0;

  // DOM Elements
  const humanScoreElement = document.getElementById('human-score');
  const computerScoreElement = document.getElementById('computer-score');
  const roundsPlayedElement = document.getElementById('rounds-played');
  const outputElement = document.querySelector('.output');
  const gameButtons = document.querySelectorAll('.buttons button');
  const resetButton = document.getElementById('reset');

  const TOTAL_ROUNDS = 5;

  // updates the scores in the UI
  function updateScores() {
    humanScoreElement.textContent = `You: ${humanScore}`;
    computerScoreElement.textContent = `Computer: ${computerScore}`;
  }

  // updates the output message
  function updateOutput(message) {
    outputElement.innerHTML = message.replace(/\n/g, '<br>'); // this replaces \n with <br> so it will be recognized by HTML
  }

  function updateRoundsPlayed() {
    roundsPlayedElement.textContent = `Rounds played: ${roundsPlayed} / ${TOTAL_ROUNDS}`;
  }

  // function to capitalize word in output message
  // ex: input (rock) -> return (Rock)
  function capitalize(str) {
    return str
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  }

  // gets random computer choice
  function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }

  // logic for one round of the game
  function playRound(humanChoice) {
    const computerChoice = getComputerChoice();
    let resultMessage = `You chose: ${capitalize(humanChoice)}\nComputer chose: ${capitalize(
      computerChoice
    )}`;

    if (humanChoice === computerChoice) resultMessage += `\nIt's a tie this round! 😅`;
    else if (
      (humanChoice === 'rock' && computerChoice === 'scissors') ||
      (humanChoice === 'paper' && computerChoice === 'rock') ||
      (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
      humanScore++;
      resultMessage += `\nYou win this round! 😁`;
    } else {
      computerScore++;
      resultMessage += `\nYou lose this round 😢`;
    }

    roundsPlayed++;
    updateRoundsPlayed();
    updateScores();
    updateOutput(resultMessage);
    checkWinner();
  }

  // Checks if the game has completed x number of rounds
  function checkWinner() {
    if (roundsPlayed >= TOTAL_ROUNDS) {
      let winnerMessage = '';

      if (humanScore > computerScore) winnerMessage = `Congratulations!\nYou won the game! 🏆`;
      else if (computerScore > humanScore)
        winnerMessage = `The computer won the game.\nBetter luck next time. 🤖`;
      else winnerMessage = `It's a tie! Well played. 🤝`;

      updateOutput(winnerMessage);
      gameButtons.forEach((button) => button.setAttribute('disabled', 'true')); // disables the game buttons
    }
  }

  // Reset the Game
  function resetGame() {
    humanScore = 0;
    computerScore = 0;
    roundsPlayed = 0;
    updateScores();
    updateRoundsPlayed();
    updateOutput('Game reset! Make your move.');
    gameButtons.forEach((button) => button.removeAttribute('disabled')); // Re-enables game buttons
  }

  // Event Listeners for Gameplay buttons
  gameButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const humanChoice = button.id;
      playRound(humanChoice);
      checkWinner();
    });
  });

  // Event Listener for reset button
  resetButton.addEventListener('click', resetGame);

  // Initial State
  updateScores();
  updateRoundsPlayed();
  updateOutput('Best out of five wins! Start the game by pressing one of the buttons.');
});
