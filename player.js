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

    if (this.difficultSelected) {
      selections.push('lizard', 'alien');
    }
    if (this.rockSelection) {
      this.humanSelection = 'rock';
    } else if (this.paperSelection) {
      this.humanSelection = 'paper';
    } else if (this.scissorsSelection) {
      this.humanSelection = 'scissors';
    } else if (this.lizardSelection) {
      this.humanSelection = 'lizard';
    } else if (this.alienSelection) {
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
