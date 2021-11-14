class Game {
  constructor() {
    this.player1 = new Player('Player 1', '👦');
    this.player2 = new Player('Player 2', '🤖');
    this.humanWon = false;
    this.computerWon = false;
    this.draw = false;
    this.timeout;
  }

  gamePlay() {
    var humanSelection = this.player1.assignHumanPlayerSelection();
    var computerSelection = this.player2.takeTurn();

    if (humanSelection === 'rock' && computerSelection === 'rock'         ||
        humanSelection === 'paper' && computerSelection === 'paper'       ||
        humanSelection === 'scissors' && computerSelection === 'scissors' ||
        humanSelection === 'lizard' && computerSelection === 'lizard'     ||
        humanSelection === 'alien' && computerSelection === 'alien') {

      this.humanWon = false;
      this.computerWon = false;
      this.draw = true;
    } else if (humanSelection === 'rock' && computerSelection === 'scissors'   ||
               humanSelection === 'rock' && computerSelection === 'lizard'     ||
               humanSelection === 'paper' && computerSelection === 'rock'      ||
               humanSelection === 'paper' && computerSelection === 'alien'     ||
               humanSelection === 'scissors' && computerSelection === 'paper'  ||
               humanSelection === 'scissors' && computerSelection === 'lizard' ||
               humanSelection === 'lizard' && computerSelection === 'paper'    ||
               humanSelection === 'lizard' && computerSelection === 'alien'    ||
               humanSelection === 'alien' && computerSelection === 'rock'      ||
               humanSelection === 'alien' && computerSelection === 'scissors') {

      this.player1.humanWins++;
      this.humanWon = true;
      this.computerWon = false;
      this.draw = false;
      this.player1.saveWinsToStorage();
    } else if (humanSelection === 'rock' && computerSelection === 'paper'      ||
               humanSelection === 'rock' && computerSelection === 'alien'      ||
               humanSelection === 'paper' && computerSelection === 'scissors'  ||
               humanSelection === 'paper' && computerSelection === 'lizard'    ||
               humanSelection === 'scissors' && computerSelection === 'rock'   || 
               humanSelection === 'scissors' && computerSelection === 'alien'  ||
               humanSelection === 'lizard' && computerSelection === 'rock'     ||
               humanSelection === 'lizard' && computerSelection === 'scissors' ||
               humanSelection === 'alien' && computerSelection === 'paper'     ||
               humanSelection === 'alien' && computerSelection === 'lizard') {

      this.player2.computerWins++;
      this.humanWon = false;
      this.computerWon = true;
      this.draw = false;
      this.player2.saveWinsToStorage();
    }
  }

  resetPlayers() {
    this.player1.humanSelection = '';
    this.player2.computerSelection = '';
  }

  winnerTimeout() {
    if (classicGameButton.classList.contains('selected')) {
      return this.timeout = setTimeout(hideClassicWinnerDisplayContainer, 2000);
    } else if (difficultGameButton.classList.contains('selected')) {
      return this.timeout = setTimeout(hideDifficultWinnerDisplayContainer, 2000);
    }
  }

  clearWinnerTimeout() {
    clearTimeout(this.timeout);
  }
}