const choices = ['rock', 'paper', 'scissors'];
let humanScore = 0;
let computerScore = 0;
const getChoiceInput = () => {
  return prompt('Enter 1 for Rock, 2 for Paper, or 3 for Scissors:');
};

const choiceInput = getChoiceInput();
const humanChoice = getHumanChoice(choiceInput);
const computerChoice = getComputerChoice();

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getHumanChoice(choice) {
  return choices[choice - 1];
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) return console.log("It's a tie!");

  if (humanChoice === 'rock') {
    if (computerChoice === 'paper') {
      computerScore++;
      return console.log('Paper beats rock. You lose.');
    }
    if (computerChoice === 'scissors') {
      humanScore++;
      return console.log('Rock beats scissors. You win!');
    }
  } else if (humanChoice === 'paper') {
    if (computerChoice === 'rock') {
      humanScore++;
      return console.log('Paper beats rock. You win!');
    }
    if (computerChoice === 'scissors') {
      computerScore++;
      return console.log('Scissors beats paper. You lose.');
    }
  } else if (humanChoice === 'scissors') {
    if (computerChoice === 'rock') {
      computerScore++;
      return console.log('Rock beats scissors. You lose.');
    }
    if (computerChoice === 'paper') {
      humanScore++;
      return console.log('Scissors beats paper. You win!');
    }
  }
}

playRound(humanChoice, computerChoice);
console.log(humanScore);
console.log(computerScore);
