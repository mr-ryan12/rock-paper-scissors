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

  takeTurn() {
    var selections = ['rock', 'paper', 'scissors'];

    if (difficultGameButton.classList.contains('selected')) {
      selections.push('lizard', 'alien');
    }
    if (rockSelectionButton.classList.contains('selected')) {
      this.humanSelection = 'rock';
    } else if (paperSelectionButton.classList.contains('selected')) {
      this.humanSelection = 'paper';
    } else if (scissorsSelectionButton.classList.contains('selected')) {
      this.humanSelection = 'scissors';
    } else if (lizardSelectionButton.classList.contains('selected')) {
      this.humanSelection = 'lizard';
    } else if (alienSelectionButton.classList.contains('selected')) {
      this.humanSelection = 'alien';
    }
    this.computerSelection = selections[this.getRandomIndex(selections)];

    return {
      computerSelection: this.computerSelection,
      humanSelection: this.humanSelection
    };
  }

  getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
  }
}
