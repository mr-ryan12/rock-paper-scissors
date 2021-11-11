// Query Selectors
var gameSelectionContainer = document.getElementById('gameSelectionContainer');
var fighterSelectionContainer = document.getElementById('fighterSelectionContainer');
var chooseYourGameText = document.getElementById('chooseYourGame');
var humanSelectionImage = document.getElementById('displayHumanSelection');
var computerSelectionImage = document.getElementById('displayComputerSelection');
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

function displayWinnerText() {
  if (currentGame.humanWon) {
    chooseYourGameText.innerText = `${currentGame.player1.token} Human won this round! ${currentGame.player1.token}`;
  } else if (currentGame.computerWon) {
    chooseYourGameText.innerText = `${currentGame.player2.token} Computer won this round! ${currentGame.player2.token}`;
  } else if (currentGame.draw) {
    chooseYourGameText.innerText = `😬 It's a draw! 😬`;
  }
}

function displayHumanFighter() {
  if (currentGame.player1.humanSelection === 'rock') {
    humanSelectionImage.src = './assets/happy-rocks.png';
  } else if (currentGame.player1.humanSelection === 'paper') {
    humanSelectionImage.src = './assets/happy-paper.png';
  } else if (currentGame.player1.humanSelection === 'scissors') {
    humanSelectionImage.src = './assets/scissors-copy.png';
  } else if (currentGame.player1.humanSelection === 'lizard') {
    humanSelectionImage.src = './assets/lizard.png';
  } else if (currentGame.player1.humanSelection === 'alien') {
    humanSelectionImage.src = './assets/happy-alien.png';
  }
}

function displayComputerFighter() {
  if (currentGame.player2.computerSelection === 'rock') {
    computerSelectionImage.src = './assets/happy-rocks.png';
  } else if (currentGame.player2.computerSelection === 'paper') {
    computerSelectionImage.src = './assets/happy-paper.png';
  } else if (currentGame.player2.computerSelection === 'scissors') {
    computerSelectionImage.src = './assets/scissors-copy.png';
  } else if (currentGame.player2.computerSelection === 'lizard') {
    computerSelectionImage.src = './assets/lizard.png';
  } else if (currentGame.player2.computerSelection === 'alien') {
    computerSelectionImage.src = './assets/happy-alien.png';
  }
}

function displayWinnerContainer() {
  hideElement(gameSelectionContainer);
  hideElement(fighterSelectionContainer);
  hideElement(lizardSelectionButton);
  hideElement(alienSelectionButton);
  displayElement(winnerDisplayContainer);
  displayWinnerText();
  displayHumanFighter();
  displayComputerFighter();
}
