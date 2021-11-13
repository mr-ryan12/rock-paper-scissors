// Query Selectors
var humanWins = document.getElementById('humanWins');
var computerWins = document.getElementById('computerWins');
var chooseYourGameText = document.getElementById('chooseYourGame');
var displayTokenOnRock = document.getElementById('displayTokenOnRock');
var displayTokenOnPaper = document.getElementById('displayTokenOnPaper');
var displayTokenOnAlien = document.getElementById('displayTokenOnAlien');
var humanSelectionImage = document.getElementById('displayHumanSelection');
var displayTokenOnLizard = document.getElementById('displayTokenOnLizard');
var winnerDisplayContainer = document.getElementById('winnerDisplayContainer');
var displayTokenOnScissors = document.getElementById('displayTokenOnScissors');
var gameSelectionContainer = document.getElementById('gameSelectionContainer');
var computerSelectionImage = document.getElementById('displayComputerSelection');
var fighterSelectionContainer = document.getElementById('fighterSelectionContainer');

// Variables targeting button elements
var changeGameButton = document.getElementById('changeGameBtn');
var classicGameButton = document.getElementById('classicGameBtn');
var rockSelectionButton = document.getElementById('rockSelection');
var paperSelectionButton = document.getElementById('paperSelection');
var difficultGameButton = document.getElementById('difficultGameBtn');
var alienSelectionButton = document.getElementById('alienSelectionBtn');
var lizardSelectionButton = document.getElementById('lizardSelectionBtn');
var scissorsSelectionButton = document.getElementById('scissorsSelection');

// Event Listeners
window.addEventListener('load', displayWins);
classicGameButton.addEventListener('click', displayClassicGame);
difficultGameButton.addEventListener('click', displayDifficultGame);
rockSelectionButton.addEventListener('click', displayOnRockClick);
paperSelectionButton.addEventListener('click', displayOnPaperClick);
scissorsSelectionButton.addEventListener('click', displayOnScissorClick);
lizardSelectionButton.addEventListener('click', displayOnLizardClick);
alienSelectionButton.addEventListener('click', displayOnAlienClick);
changeGameButton.addEventListener('click', displayGameSelection);

var currentGame = new Game();
// Ask if these are okay - assigned on line 157. Maybe place all setTimeout/clearTimeout logic in game.js
var idClassicTimeout;
var idDifficultTimeout;

function displayElement(element) {
  element.classList.remove('hidden');
}

function hideElement(element) {
  element.classList.add('hidden');
}

function displayClassicGame() {
  classicGameButton.classList.add('selected');
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

//Possibly place button elements in an array and iterate over them adding an eventListener
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
  displayWins();
  resetGame();
}

function resetGame() {
  currentGame.reset();
  changeToFighterSelectionView();
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


// Possibly place all setTimeout/clearTimeout logic in game.js
function changeToFighterSelectionView() {
  if (classicGameButton.classList.contains('selected')) {
    idClassicTimeout = setTimeout(hideClassicWinnerDisplayContainer, 2000);
  } else if (difficultGameButton.classList.contains('selected')) {
    idDifficultTimeout = setTimeout(hideDifficultWinnerDisplayContainer, 2000);
  }

  return idClassicTimeout, idDifficultTimeout;
}

function hideClassicWinnerDisplayContainer() {
  hideTokens();
  hideElement(winnerDisplayContainer);
  displayElement(changeGameButton);
  displayClassicGame();
}

function hideDifficultWinnerDisplayContainer() {
  hideTokens();
  hideElement(winnerDisplayContainer);
  displayElement(changeGameButton);
  displayDifficultGame();
}

function displayGameSelection() {
  chooseYourGameText.innerText = 'Choose your game!';

  if (classicGameButton.classList.contains('selected')) {
    classicGameButton.classList.remove('selected');
  }
  if (difficultGameButton.classList.contains('selected')) {
    difficultGameButton.classList.remove('selected');
  }

  // Possibly place the below (or above) in another function and invoke inside of this one
  clearTimeout(idClassicTimeout);
  clearTimeout(idDifficultTimeout);
  displayElement(gameSelectionContainer);
  hideElement(fighterSelectionContainer);
  hideElement(lizardSelectionButton);
  hideElement(alienSelectionButton);
  hideElement(changeGameButton);
  hideElement(winnerDisplayContainer);
  hideTokens();
}

function displayWins() {
  humanWins.innerText = `${currentGame.player1.retrieveWinsFromStorage().playerOne}`;
  computerWins.innerText = `${currentGame.player2.retrieveWinsFromStorage().playerTwo}`;
}

function displayOnRockClick() {
  displayElement(displayTokenOnRock);
  setTimeout(checkRockSelection, 110);
}

function displayOnPaperClick() {
  displayElement(displayTokenOnPaper);
  setTimeout(checkPaperSelection, 110);
}

function displayOnScissorClick() {
  displayElement(displayTokenOnScissors);
  setTimeout(checkScissorsSelection, 110);
}

function displayOnLizardClick() {
  displayElement(displayTokenOnLizard);
  setTimeout(checkLizardSelection, 110);
}

function displayOnAlienClick() {
  displayElement(displayTokenOnAlien);
  setTimeout(checkAlienSelection, 110);
}

function hideTokens() {
  hideElement(displayTokenOnRock);
  hideElement(displayTokenOnPaper);
  hideElement(displayTokenOnScissors);
  hideElement(displayTokenOnLizard);
  hideElement(displayTokenOnAlien);
}