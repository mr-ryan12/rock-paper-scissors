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
    } 
  }

  assignComputerPlayerSelection() {
    var selections = ['rock', 'paper', 'scissors'];
    var getRandomIndex = Math.floor(Math.random() * selections.length);

    return this.computerSelection = selections[getRandomIndex];
  }

  takeTurn() {

  }
}