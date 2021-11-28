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
classicGameButton.addEventListener('click', () => {
  displayGame(classicGameButton, [fighterSelectionContainer]);
});
difficultGameButton.addEventListener('click', () => {
  displayGame(difficultGameButton, [fighterSelectionContainer, lizardSelectionButton, alienSelectionButton]);
});
rockSelectionButton.addEventListener('click', () => {
  displayOnClick(displayTokenOnRock, rockSelectionButton)
});
paperSelectionButton.addEventListener('click', () => {
  displayOnClick(displayTokenOnPaper, paperSelectionButton)
});
alienSelectionButton.addEventListener('click', () => {
  displayOnClick(displayTokenOnAlien, alienSelectionButton)
});
lizardSelectionButton.addEventListener('click', () => {
  displayOnClick(displayTokenOnLizard, lizardSelectionButton)
});
scissorsSelectionButton.addEventListener('click', () => {
  displayOnClick(displayTokenOnScissors, scissorsSelectionButton)
});

var currentGame = new Game();

const displayElements = (elements) => {
  elements.forEach(element => element.classList.remove('hidden'));
}

const hideElements = (elements) => {
  elements.forEach(element => element.classList.add('hidden'));
}

const resetButtons = (buttons) => {
  buttons.forEach(button => button.classList.remove('selected'));
}

const displayOnClick = (displayTokenOnElement, fighterSelectionButton) => {
  if (displayTokenOnElement.classList.contains('hidden') && !currentGame.isInProgress) {
    currentGame.isInProgress = true;  
    displayElements([displayTokenOnElement]);
    currentGame.selectionTimeout(fighterSelectionButton);
  }
}

const displayGame = (button, elements) => {
  button.classList.add('selected');
  hideElements([gameSelectionContainer]);
  displayElements(elements);
  chooseYourGameText.innerText = 'Choose your fighter!';
}

const checkSelection = (selection) => {
  selection.classList.add('selected');
  checkPlayerSelection();
  gamePlay();
}

const gamePlay = () => {
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

const displayWinnerText = () => {
  currentGame.browserSpeak();
  switch (true) {
    case currentGame.humanWon:
      chooseYourGameText.innerText = `${currentGame.player1.token} Human won this round! ${currentGame.player1.token}`;
      break;
    case currentGame.computerWon:
      chooseYourGameText.innerText = `${currentGame.player2.token} Computer won this round! ${currentGame.player2.token}`;
      break;
    default:
      chooseYourGameText.innerText = `😬 It's a draw! 😬`;
  }
}

const displayFighter = (player, selection, imageRef) => {
  var currentGameSelection = currentGame[player][selection];

  switch (currentGameSelection) {
    case 'rock':
      imageRef.src = './assets/happy-rocks.png';
      imageRef.alt = 'Happy Rocks';
      break;
    case 'paper':
      imageRef.src = './assets/happy-paper.png';
      imageRef.alt = 'Happy Paper';
      break;
    case 'scissors':
      imageRef.src = './assets/scissors-copy.png';
      imageRef.alt = 'Happy Scissors';
      break;
    case 'lizard':
      imageRef.src = './assets/lizard.png';
      imageRef.alt = 'Happy Lizard';
      break;
    case 'alien':
      imageRef.src = './assets/happy-alien.png';
      imageRef.alt = 'Happy Alien';
      break;
  }
}

const displayWinnerContainer = () => {
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

const hideClassicWinnerDisplayContainer = () => {
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

const hideDifficultWinnerDisplayContainer = () => {
  displayElements([changeGameButton]);
  displayGame(difficultGameButton, [fighterSelectionContainer, lizardSelectionButton, alienSelectionButton]);
  hideElements([
    displayTokenOnRock,
    displayTokenOnPaper,
    displayTokenOnScissors,
    displayTokenOnLizard,
    displayTokenOnAlien,
    winnerDisplayContainer
  ]);
}

const removeGameSelection = () => {
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

const setWinnerTimeout = () => {
  if (classicGameButton.classList.contains('selected')) {
    currentGame.timeout = setTimeout(hideClassicWinnerDisplayContainer, 2000);
  } else if (difficultGameButton.classList.contains('selected')) {
    currentGame.timeout = setTimeout(hideDifficultWinnerDisplayContainer, 2000);
  }
}

const checkPlayerSelection = () => {
  if (difficultGameButton.classList.contains('selected')) {
    currentGame.player2.difficultSelected = true;
  }

  switch (true) {
    case rockSelectionButton.classList.contains('selected'):
      currentGame.player1.rockSelection = true;
      break;
    case paperSelectionButton.classList.contains('selected'):
      currentGame.player1.paperSelection = true;
      break;
    case scissorsSelectionButton.classList.contains('selected'):
      currentGame.player1.scissorsSelection = true;
      break;
    case lizardSelectionButton.classList.contains('selected'):
      currentGame.player1.lizardSelection = true;
      break;
    default:
      currentGame.player1.alienSelection = true;
  }
}
