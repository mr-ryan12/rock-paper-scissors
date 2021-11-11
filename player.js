class Player {
  constructor(name, token) {
    this.name = name;
    this.token = token;
    this.wins = 0;
  }

  saveWinsToStorage() {

  }

  retrieveWinsFromStorage() {

  }

  assignHumanPlayerSelection() {
    if (rockSelectionButton.classList.contains('selected')) {
      return this.humanSelection = 'rock';
    } else if (paperSelectionButton.classList.contains('selected')) {
      return this.humanSelection = 'paper';
    } else if (scissorsSelectionButton.classList.contains('selected')) {
      return this.humanSelection = 'scissors';
    } else if (lizardSelectionButton.classList.contains('selected')) {
      return this.humanSelection = 'lizard';
    } else if (alienSelectionButton.classList.contains('selected')) {
      return this.humanSelection = 'alien';
    }
  }

  assignComputerPlayerSelection() {
    var selections = ['rock', 'paper', 'scissors'];
    var getRandomIndex;

    if (difficultGameButton.classList.contains('selected')) {
      selections.push('lizard', 'alien');
    }

    getRandomIndex = Math.floor(Math.random() * selections.length);

    return this.computerSelection = selections[getRandomIndex];
  }

  takeTurn() {

  }
}