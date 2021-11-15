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
changeGameButton.addEventListener('click', displayGameSelection);
difficultGameButton.addEventListener('click', displayDifficultGame);
rockSelectionButton.addEventListener('click', function() {
  displayOnClick(displayTokenOnRock, rockSelectionButton)
});
paperSelectionButton.addEventListener('click', function() {
  displayOnClick(displayTokenOnPaper, paperSelectionButton)
});
alienSelectionButton.addEventListener('click', function() {
  displayOnClick(displayTokenOnAlien, alienSelectionButton)
});
lizardSelectionButton.addEventListener('click', function() {
  displayOnClick(displayTokenOnLizard, lizardSelectionButton)
});
scissorsSelectionButton.addEventListener('click', function() {
  displayOnClick(displayTokenOnScissors, scissorsSelectionButton)
});

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

function resetButtons(buttons) {
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove('selected');
  }
}

function displayOnClick(displayTokenOnElement, fighterSelectionButton) {
  if (displayTokenOnElement.classList.contains('hidden')) {
    displayElements([displayTokenOnElement]);
    currentGame.selectionTimeout(fighterSelectionButton);
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
  displayElements([
    fighterSelectionContainer,
    lizardSelectionButton,
    alienSelectionButton
  ]);
  chooseYourGameText.innerText = 'Choose your fighter!';
}

function checkSelection(selection) {
  selection.classList.add('selected');
  gamePlay();
}

function gamePlay() {
  currentGame.winConditions();
  displayWinnerContainer();
  displayWins();
  currentGame.resetPlayers();
  currentGame.winnerTimeout();
  resetButtons([
    rockSelectionButton,
    paperSelectionButton,
    scissorsSelectionButton,
    lizardSelectionButton,
    alienSelectionButton
  ]);
}

function displayWinnerText() {
  currentGame.browserSpeak();
  if (currentGame.humanWon) {
    chooseYourGameText.innerText = `${currentGame.player1.token} Human won this round! ${currentGame.player1.token}`;
  } else if (currentGame.computerWon) {
    chooseYourGameText.innerText = `${currentGame.player2.token} Computer won this round! ${currentGame.player2.token}`;
  } else if (currentGame.draw) {
    chooseYourGameText.innerText = `😬 It's a draw! 😬`;
  }
}

function displayFighter(player, selection, imageRef) {
  var currentGameSelection = currentGame[player][selection];

  if (currentGameSelection === 'rock') {
    imageRef.src = './assets/happy-rocks.png';
    imageRef.alt = 'Happy Rocks';
  } else if (currentGameSelection === 'paper') {
    imageRef.src = './assets/happy-paper.png';
    imageRef.alt = 'Happy Paper';
  } else if (currentGameSelection === 'scissors') {
    imageRef.src = './assets/scissors-copy.png';
    imageRef.alt = 'Happy Scissors';
  } else if (currentGameSelection === 'lizard') {
    imageRef.src = './assets/lizard.png';
    imageRef.alt = 'Happy Lizard';
  } else if (currentGameSelection === 'alien') {
    imageRef.src = './assets/happy-alien.png';
    imageRef.alt = 'Happy Alien';
  }
}

function displayWinnerContainer() {
  hideElements([
    gameSelectionContainer,
    fighterSelectionContainer,
    lizardSelectionButton,
    alienSelectionButton
  ]);
  displayElements([winnerDisplayContainer]);
  displayWinnerText();
  displayFighter('player1', 'humanSelection', humanSelectionImage);
  displayFighter('player2', 'computerSelection', computerSelectionImage);
}

function hideClassicWinnerDisplayContainer() {
  hideElements([
    displayTokenOnRock,
    displayTokenOnPaper,
    displayTokenOnScissors,
    displayTokenOnLizard,
    displayTokenOnAlien,
    winnerDisplayContainer
  ]);
  displayElements([changeGameButton]);
  displayClassicGame();
}

function hideDifficultWinnerDisplayContainer() {
  displayElements([changeGameButton]);
  displayDifficultGame();
  hideElements([
    displayTokenOnRock,
    displayTokenOnPaper,
    displayTokenOnScissors,
    displayTokenOnLizard,
    displayTokenOnAlien,
    winnerDisplayContainer
  ]);
}

function removeGameSelection() {
  if (classicGameButton.classList.contains('selected')) {
    return classicGameButton.classList.remove('selected');
  } else if (difficultGameButton.classList.contains('selected')) {
    return difficultGameButton.classList.remove('selected');
  }
}

function displayGameSelection() {
  currentGame.clearWinnerTimeout();
  removeGameSelection();
  chooseYourGameText.innerText = 'Choose your game!';
  displayElements([gameSelectionContainer]);
  hideElements([
    fighterSelectionContainer,
    lizardSelectionButton,
    alienSelectionButton,
    changeGameButton,
    winnerDisplayContainer,
    displayTokenOnRock,
    displayTokenOnPaper,
    displayTokenOnScissors,
    displayTokenOnLizard,
    displayTokenOnAlien
  ]);
}

function displayWins() {
  humanWins.innerText = `Wins: ${currentGame.player1.retrieveWinsFromStorage().playerOne}`;
  computerWins.innerText = `Wins: ${currentGame.player2.retrieveWinsFromStorage().playerTwo}`;
}
