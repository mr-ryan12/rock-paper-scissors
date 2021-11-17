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
changeGameButton.addEventListener('click', displayGameSelection);
classicGameButton.addEventListener('click', function() {
  displayGame(classicGameButton, [fighterSelectionContainer]);
});
difficultGameButton.addEventListener('click', function() {
  displayGame(difficultGameButton, [fighterSelectionContainer, lizardSelectionButton, alienSelectionButton]);
});
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
  if (displayTokenOnElement.classList.contains('hidden') && !currentGame.isInProgress) {
    currentGame.isInProgress = true;  
    displayElements([displayTokenOnElement]);
    currentGame.selectionTimeout(fighterSelectionButton);
  }
}

function displayGame(button, elements) {
  button.classList.add('selected');
  hideElements([gameSelectionContainer]);
  displayElements(elements);
  chooseYourGameText.innerText = 'Choose your fighter!';
}

function checkSelection(selection) {
  selection.classList.add('selected');
  checkPlayerSelection();
  gamePlay();
}

function gamePlay() {
  currentGame.winConditions();
  displayWinnerContainer();
  displayWins();
  currentGame.resetPlayers();
  setWinnerTimeout();
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
  displayGame(classicGameButton, [fighterSelectionContainer]);
}

function hideDifficultWinnerDisplayContainer() {
  displayElements([changeGameButton]);
  displayGame(difficultGameButton, [fighterSelectionContainer,lizardSelectionButton, alienSelectionButton]);
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
  humanWins.innerText = `Wins: ${currentGame.player1.wins}`;
  computerWins.innerText = `Wins: ${currentGame.player2.wins}`;
}

function setWinnerTimeout() {
  if (classicGameButton.classList.contains('selected')) {
    currentGame.timeout = setTimeout(hideClassicWinnerDisplayContainer, 2000);
  } else if (difficultGameButton.classList.contains('selected')) {
    currentGame.timeout = setTimeout(hideDifficultWinnerDisplayContainer, 2000);
  }
}

function checkPlayerSelection() {
  if (difficultGameButton.classList.contains('selected')) {
    currentGame.player2.difficultSelected = true;
  }
  if (rockSelectionButton.classList.contains('selected')) {
    currentGame.player1.rockSelection = true;
  } else if (paperSelectionButton.classList.contains('selected')) {
    currentGame.player1.paperSelection = true;
  } else if (scissorsSelectionButton.classList.contains('selected')) {
    currentGame.player1.scissorsSelection = true;
  } else if (lizardSelectionButton. classList.contains('selected')) {
    currentGame.player1.lizardSelection = true;
  } else if (alienSelectionButton.classList.contains('selected')) {
    currentGame.player1.alienSelection = true;
  }
}
