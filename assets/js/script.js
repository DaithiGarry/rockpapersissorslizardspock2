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