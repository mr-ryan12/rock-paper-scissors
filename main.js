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


function displayElements(elements) {
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.remove('hidden');
  }
}

function hideElements(elements) {
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.add('hidden');
  }
}

function displayClassicGame() {
  classicGameButton.classList.add('selected');
  hideElements([gameSelectionContainer]);
  displayElements([fighterSelectionContainer]);
  chooseYourGameText.innerText = 'Choose your fighter!';
}

function displayDifficultGame() {
  difficultGameButton.classList.add('selected');
  hideElements([gameSelectionContainer]);
  displayElements([fighterSelectionContainer, lizardSelectionButton, alienSelectionButton]);
  chooseYourGameText.innerText = 'Choose your fighter!';
}

function checkSelection(selection) {
  selection.classList.add('selected');
  gamePlay();
}

function gamePlay() {
  currentGame.gamePlay();
  displayWinnerContainer();
  displayWins();
  currentGame.reset();
  currentGame.winnerTimeout();
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
  hideElements([gameSelectionContainer, fighterSelectionContainer, lizardSelectionButton, alienSelectionButton]);
  displayElements([winnerDisplayContainer]);
  displayWinnerText();
  displayHumanFighter();
  displayComputerFighter();
}

function hideClassicWinnerDisplayContainer() {
  hideElements([displayTokenOnRock, displayTokenOnPaper, displayTokenOnScissors, displayTokenOnLizard, displayTokenOnAlien]);
  hideElements([winnerDisplayContainer]);
  displayElements([changeGameButton]);
  displayClassicGame();
}

function hideDifficultWinnerDisplayContainer() {
  displayElements([changeGameButton]);
  displayDifficultGame();
  hideElements([displayTokenOnRock, displayTokenOnPaper, displayTokenOnScissors,
                displayTokenOnLizard, displayTokenOnAlien, winnerDisplayContainer]);
}

function displayGameSelection() {
  if (classicGameButton.classList.contains('selected')) {
    classicGameButton.classList.remove('selected');
  }
  if (difficultGameButton.classList.contains('selected')) {
    difficultGameButton.classList.remove('selected');
  }

  chooseYourGameText.innerText = 'Choose your game!';
  currentGame.clearWinnerTimeout();
  displayElements([gameSelectionContainer]);
  hideElements([fighterSelectionContainer, lizardSelectionButton, alienSelectionButton, changeGameButton, winnerDisplayContainer,
                displayTokenOnRock, displayTokenOnPaper, displayTokenOnScissors, displayTokenOnLizard, displayTokenOnAlien]);
}

function displayWins() {
  humanWins.innerText = `${currentGame.player1.retrieveWinsFromStorage().playerOne}`;
  computerWins.innerText = `${currentGame.player2.retrieveWinsFromStorage().playerTwo}`;
}

function displayOnRockClick() {
  displayElements([displayTokenOnRock]);
  setTimeout(function() {checkSelection(rockSelectionButton)}, 110);
}

function displayOnPaperClick() {
  displayElements([displayTokenOnPaper]);
  setTimeout(function() {checkSelection(paperSelectionButton)}, 110);
}

function displayOnScissorClick() {
  displayElements([displayTokenOnScissors]);
  setTimeout(function() {checkSelection(scissorsSelectionButton)}, 110);
}

function displayOnLizardClick() {
  displayElements([displayTokenOnLizard]);
  setTimeout(function() {checkSelection(lizardSelectionButton)}, 110);
}

function displayOnAlienClick() {
  displayElements([displayTokenOnAlien]);
  setTimeout(function() {checkSelection(alienSelectionButton)}, 110);
}
