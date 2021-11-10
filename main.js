// Query Selectors
var classicGameButton = document.getElementById('classicGameBtn');
var difficultGameButton = document.getElementById('difficultGameBtn');
var gameSelectionContainer = document.getElementById('gameSelectionContainer');
var fighterSelectionContainer = document.getElementById('fighterSelectionContainer');
// Event Listeners
classicGameButton.addEventListener('click', displayClassicGame);
difficultGame.addEventListener('click', displayDifficultGame);

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