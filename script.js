const choices = ['rock', 'paper', 'scissors'];
let humanScore = 0;
let computerScore = 0;

const getChoiceInput = () => {
  let choice;
  do {
    choice = prompt('Enter 1 for Rock, 2 for Paper, or 3 for Scissors:');
  } while (!['1', '2', '3'].includes(choice));
  return choice;
};

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getHumanChoice(choice) {
  return choices[choice - 1];
}

function playRound(humanChoice, computerChoice) {
  console.log(`You chose: ${humanChoice}`);
  console.log(`Computer chose: ${computerChoice}`);

  if (humanChoice === computerChoice) return console.log("It's a tie this round!");

  if (humanChoice === 'rock') {
    if (computerChoice === 'paper') {
      computerScore++;
      console.log('Paper beats rock. You lose this round.');
    }
    if (computerChoice === 'scissors') {
      humanScore++;
      console.log('Rock beats scissors. You win this round!');
    }
  } else if (humanChoice === 'paper') {
    if (computerChoice === 'rock') {
      humanScore++;
      console.log('Paper beats rock. You win this round!');
    }
    if (computerChoice === 'scissors') {
      computerScore++;
      console.log('Scissors beats paper. You lose this round.');
    }
  } else if (humanChoice === 'scissors') {
    if (computerChoice === 'rock') {
      computerScore++;
      console.log('Rock beats scissors. You lose this round.');
    }
    if (computerChoice === 'paper') {
      humanScore++;
      console.log('Scissors beats paper. You win this round!');
    }
  }

  console.log(`Your score: ${humanScore}`);
  console.log(`Computer's score: ${computerScore}`);
}

// Full Game
function playGame() {
  console.log('Best of 5 rounds starts now!');

  let roundsPlayed = 0;
  const totalRounds = 5;
  const autoWin = 3;

  while (roundsPlayed < totalRounds && humanScore < autoWin && computerScore < autoWin) {
    const choiceInput = getChoiceInput();
    const humanChoice = getHumanChoice(choiceInput);
    const computerChoice = getComputerChoice();

    playRound(humanChoice, computerChoice);
    roundsPlayed++;

    console.log(`Round ${roundsPlayed} of ${totalRounds} completed.\n`);
  }

  // Determine winner
  console.log('Game over!');
  console.log(`Final Scores - You: ${humanScore}, Computer: ${computerScore}`);
  if (humanScore > computerScore) console.log('Congradulations! You won the game!');
  else if (humanScore < computerScore)
    console.log('The computer won the game. Better luck next time.');
  else console.log("It's a tie overall! Well played.");
}

function startGame() {
  let input;
  do {
    input = prompt("Type 'start' to begin the game or 'quit' to exit:");
    if (input === 'quit') {
      console.log('Goodbye!');
      return; // Exit the game
    }
  } while (input.toLowerCase() !== 'start');

  playGame(); // Start the game when "start" is entered
}

startGame();
