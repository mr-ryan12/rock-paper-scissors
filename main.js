// Query Selectors
var gameSelectionContainer = document.getElementById('gameSelectionContainer');
var fighterSelectionContainer = document.getElementById('fighterSelectionContainer');
var chooseYourGameText = document.getElementById('chooseYourGame');

// Variables targeting button elements
var classicGameButton = document.getElementById('classicGameBtn');
var difficultGameButton = document.getElementById('difficultGameBtn');
var alienSelectionButton = document.getElementById('alienSelectionBtn');
var lizardSelectionButton = document.getElementById('lizardSelectionBtn');
var rockSelectionButton = document.getElementById('rockSelection');
var paperSelectionButton = document.getElementById('paperSelection');
var scissorsSelectionButton = document.getElementById('scissorsSelection');

// Event Listeners
classicGameButton.addEventListener('click', displayClassicGame);
difficultGameButton.addEventListener('click', displayDifficultGame);
rockSelectionButton.addEventListener('click', humanSelection);
paperSelectionButton.addEventListener('click', checkPaperSelection);
scissorsSelectionButton.addEventListener('click', checkScissorsSelection);
lizardSelectionButton.addEventListener('click', checkLizardSelection);
alienSelectionButton.addEventListener('click', checkAlienSelection);


// Global Variables

var currentGame = new Game();

function displayElement(element) {
  element.classList.remove('hidden');
}

function hideElement(element) {
  element.classList.add('hidden');
}

function displayClassicGame() {
  hideElement(gameSelectionContainer);
  displayElement(fighterSelectionContainer);
  chooseYourGameText.innerText = 'Choose your fighter!';
}

function displayDifficultGame() {
  hideElement(gameSelectionContainer);
  displayElement(fighterSelectionContainer);
  displayElement(lizardSelectionButton);
  displayElement(alienSelectionButton);
  chooseYourGameText.innerText = 'Choose your fighter!';
}

function checkRockSelection() {
  rockSelectionButton.classList.add('selected');
}

function checkPaperSelection() {
  paperSelectionButton.classList.add('selected');
}

function checkScissorsSelection() {
  scissorsSelectionButton.classList.add('selected');
}

function checkLizardSelection() {
  lizardSelectionButton.classList.add('selected');
}

function checkAlienSelection() {
  alienSelectionButton.classList.add('selected');
}

function humanSelection() {
  checkRockSelection();
  currentGame.gamePlay();
}