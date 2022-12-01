const userChoiceDisplay = document.getElementById('user-choice');
const computerChoiceDisplay = document.getElementById('computer-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.getElementById('control.area').querySelectorAll('button');
const resetGameButton = document.getElementById('reset');
let correctScoreElement = document.getElementById('correct');
let incorrectScoreElement = document.getElementById('incorrect');
let userChoice;
let computerChoice;
let result;

//Game will wait for DOM to full load before starting
//Get button elements and add event listeners for player input
document.addEventListener('DOMContentLoaded', function(){
  

//function to generate user choices and start the game.
document.getElementById('user-choice').value = '';
document.getElementById('computer-choice').value = '';
document.getElementById('result').value = '';
    
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML= userChoice;
    generateComputerChoice();
    getResult();
}));
});

//function to generate computer choices during the game. Computer choices are generate automatically on the click of the users choice.
function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 5) + 1;
    
    if (randomNumber === 1) {
      computerChoice = 'rock';
    }
    if (randomNumber === 2) {
      computerChoice = 'scissors';
    }
    if (randomNumber === 3) {
      computerChoice = 'paper';
    }
    if (randomNumber === 4) {
      computerChoice = 'lizard';
    }
    if (randomNumber === 5) {
      computerChoice = 'spock';
      }
    computerChoiceDisplay.innerHTML = computerChoice
  }
  
//function to get the result of the contest between the user and the computer.
function getResult() {
  if (computerChoice === userChoice) {
    result = 'its a draw!';
    }
  if (computerChoice === 'scissors' && userChoice === "paper") {
      result = 'you lost!';
      incrementincorrect();
    }
  if (computerChoice === 'paper' && userChoice === "rock") {
      result = 'you lost!';
      incrementincorrect();
    }
  if (computerChoice === 'rock' && userChoice === "lizard") {
      result = 'you lost!';
      incrementincorrect();
    }
  if (computerChoice === 'lizard' && userChoice === "spock") {
      result = 'you lost!';
      incrementincorrect();
    }
  if (computerChoice === 'spock' && userChoice === "scissors") {
      result = 'you lost!';
      incrementincorrect();
    }
  if (computerChoice === 'scissors' && userChoice === "lizard") {
      result = 'you lost!';
      incrementincorrect();
    }
  if (computerChoice === 'lizard' && userChoice === "paper") {
      result = 'you lost!';
      incrementincorrect();
    }
  if (computerChoice === 'paper' && userChoice === "spock") {
      result = 'you lost!';
      incrementincorrect();
    }
  if (computerChoice === 'spock' && userChoice === "rock") {
      result = 'you lost!';
      incrementincorrect();
    }
  if (computerChoice === 'rock' && userChoice === "scissors") {
      result = 'you lost!';
      incrementincorrect();
    }
  if (computerChoice === 'paper' && userChoice === "scissors") {
      result = 'you win!';
      incrementcorrect();
    }
  if (computerChoice === 'rock' && userChoice === "paper") {
      result = 'you win!';
      incrementcorrect();
    }
  if (computerChoice === 'lizard' && userChoice === "rock") {
      result = 'you win!';
      incrementcorrect();
    }
  if (computerChoice === 'spock' && userChoice === "lizard") {
      result = 'you win!';
      incrementcorrect();
    }
  if (computerChoice === 'scissors' && userChoice === "spock") {
      result = 'you win!';
      incrementcorrect();
    }
  if (computerChoice === 'lizard' && userChoice === "scissors") {
      result = 'you win!';
      incrementcorrect();
    }
  if (computerChoice === 'paper' && userChoice === "lizard") {
      result = 'you win!';
      incrementcorrect();
    }
  if (computerChoice === 'spock' && userChoice === "paper") {
      result = 'you win!';
      incrementcorrect();
    }
  if (computerChoice === 'rock' && userChoice === "spock") {
      result = 'you win!';
      incrementcorrect();
    }
  if (computerChoice === 'scissors' && userChoice === "rock") {
      result = 'you win!';
      incrementcorrect();
    }
  resultDisplay.innerHTML = result;
}