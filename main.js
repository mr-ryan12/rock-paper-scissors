// Query Selectors
var classicGameButton = document.getElementById('classicGameBtn');
var difficultGameButton = document.getElementById('difficultGameBtn');
var gameSelectionContainer = document.getElementById('gameSelectionContainer');
var fighterSelectionContainer = document.getElementById('fighterSelectionContainer');
var lizardSelectionButton = document.getElementById('lizardSelectionBtn');
var alienSelectionButton = document.getElementById('alienSelectionBtn');
// Event Listeners
classicGameButton.addEventListener('click', displayClassicGame);
difficultGameButton.addEventListener('click', displayDifficultGame);

function displayElement(element) {
  element.classList.remove('hidden');
}

function hideElement(element) {
  element.classList.add('hidden');
}

function displayClassicGame() {
  hideElement(gameSelectionContainer);
  displayElement(fighterSelectionContainer);
}

function displayDifficultGame() {
  hideElement(gameSelectionContainer);
  displayElement(fighterSelectionContainer);
  displayElement(lizardSelectionButton);
  displayElement(alienSelectionButton);
}