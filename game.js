// Query Selectors
var classicGameButton = document.getElementById('classicGameBtn');
var difficultGame = document.getElementById('difficultGameBtn');

// Event Listeners
classicGameButton.addEventListener('click', displayClassicGame);
difficultGame.addEventListener('click', displayDifficultGame);

showElement(element) {
  element.classList.remove('hidden');
}

hideElement(element) {
  element.classList.add('hidden');
}
