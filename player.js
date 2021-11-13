class Player {
  constructor(name, token) {
    this.name = name;
    this.token = token;
    this.humanWins = this.retrieveWinsFromStorage().playerOne;
    this.computerWins = this.retrieveWinsFromStorage().playerTwo;
  }

  saveWinsToStorage() {
    if (this.name === 'Player 1') {
      localStorage.setItem('playerOneWins', JSON.stringify(this.humanWins));
    }
    if (this.name === 'Player 2') {
      localStorage.setItem('playerTwoWins', JSON.stringify(this.computerWins));
    }
  }

  retrieveWinsFromStorage() {
    var totalHumanWins = JSON.parse(localStorage.getItem('playerOneWins'));
    var totalComputerWins = JSON.parse(localStorage.getItem('playerTwoWins'));
    var wins;

    if (totalHumanWins === null) {
      totalHumanWins = 0;
    }
    if (totalComputerWins === null) {
      totalComputerWins = 0;
    }

    wins = {
      playerOne: totalHumanWins,
      playerTwo: totalComputerWins
    }

    return wins;
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
    var getRandomIndex;

    if (difficultGameButton.classList.contains('selected')) {
      selections.push('lizard', 'alien');
    }

    getRandomIndex = Math.floor(Math.random() * selections.length);

    return this.computerSelection = selections[getRandomIndex];
  }
}