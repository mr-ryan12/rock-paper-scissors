// Query Selectors
var gameSelectionContainer = document.getElementById('gameSelectionContainer');
var fighterSelectionContainer = document.getElementById('fighterSelectionContainer');
var chooseYourGameText = document.getElementById('chooseYourGame');
var displayHumanSelection = document.getElementById('displayHumanSelection');
var displayComputerSelection = document.getElementById('displayComputerSelection');
var winnerDisplayContainer = document.getElementById('winnerDisplayContainer');

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
rockSelectionButton.addEventListener('click', checkRockSelection);
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
  difficultGameButton.classList.add('selected');
  hideElement(gameSelectionContainer);
  displayElement(fighterSelectionContainer);
  displayElement(lizardSelectionButton);
  displayElement(alienSelectionButton);
  chooseYourGameText.innerText = 'Choose your fighter!';
}

function checkRockSelection() {
  rockSelectionButton.classList.add('selected');
  gamePlay();
}

function checkPaperSelection() {
  paperSelectionButton.classList.add('selected');
  gamePlay();
}

function checkScissorsSelection() {
  scissorsSelectionButton.classList.add('selected');
  gamePlay();
}

function checkLizardSelection() {
  lizardSelectionButton.classList.add('selected');
  gamePlay();
}

function checkAlienSelection() {
  alienSelectionButton.classList.add('selected');
  gamePlay();
}

function gamePlay() {
  currentGame.gamePlay();
  displayWinnerContainer();
  resetGame();
}

function resetGame() {
  currentGame.resetPlayers();
  rockSelectionButton.classList.remove('selected');
  paperSelectionButton.classList.remove('selected');
  scissorsSelectionButton.classList.remove('selected');
  lizardSelectionButton.classList.remove('selected');
  alienSelectionButton.classList.remove('selected');
}

function displayWinnerContainer() {
  hideElement(gameSelectionContainer);
  hideElement(fighterSelectionContainer);
  hideElement(lizardSelectionButton);
  hideElement(alienSelectionButton);
  displayElement(winnerDisplayContainer);
}
