class Player {
  constructor(name, token) {
    this.name = name;
    this.token = token;
    this.wins = this.retrieveWinsFromStorage() || 0;
  }

  saveWinsToStorage() {
    localStorage.setItem(`${this.name}`, JSON.stringify(this.wins));
  }

  retrieveWinsFromStorage() {
    var totalWins = JSON.parse(localStorage.getItem(`${this.name}`));

    return totalWins;
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

  takeTurn() {
    var selections = ['rock', 'paper', 'scissors'];

    if (difficultGameButton.classList.contains('selected')) {
      selections.push('lizard', 'alien');
    }

    return this.computerSelection = selections[this.getRandomIndex(selections)];
  }

  getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
  }
}