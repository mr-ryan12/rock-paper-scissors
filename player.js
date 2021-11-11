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
      this.selection = 'rock';
    } else if (paperSelectionButton.contains('selected')) {
      this.selection = 'paper';
    } else if (scissorsSelectionButton.contains('selected')) {
      this.selection = 'scissors';
    } 
  }

  takeTurn() {
    rockSelectionButton.classList.add('selected');
  }
}