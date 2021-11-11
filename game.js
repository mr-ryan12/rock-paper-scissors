class Game {
  constructor() {
    this.player1 = new Player('Player 1', '👦');
    this.player2 = new Player('PLayer 2', '🤖');
    this.draw = false;
  }

  gamePlay() {
    var humanSelection = this.player1.assignHumanPlayerSelection();
    var computerSelection = this.player2.assignComputerPlayerSelection();

    if (humanSelection === 'rock' && computerSelection === 'paper') {
      this.player2.wins++;
      this.draw = false;
    } else if (humanSelection === 'rock' && computerSelection === 'scissors') {
      this.player1.wins++;
      this.draw = false;
    } else if (humanSelection === 'paper' && computerSelection === 'rock') {
      this.player1.wins++;
      this.draw = false;
    } else if (humanSelection === 'paper' && computerSelection === 'scissors') {
      this.player2.wins++;
      this.draw = false;
    } else if (humanSelection === 'scissors' && computerSelection === 'rock') {
      this.player2.wins++;
      this.draw = false;
    } else if (humanSelection === 'scissors' && computerSelection === 'paper') {
      this.player1.wins++;
      this.draw = false;
    } else if (humanSelection === 'rock' && computerSelection === 'lizard') {
      this.player1.wins++;
      this.draw = false;
    } else if (humanSelection === 'rock' && computerSelection === 'alien') {
      this.player2.wins++;
      this.draw = false;
    } else if (humanSelection === 'paper' && computerSelection === 'lizard') {
      this.player2.wins++;
      this.draw = false;
    } else if (humanSelection === 'paper' && computerSelection === 'alien') {
      this.player1.wins++;
      this.draw = false;
    } else if (humanSelection === 'scissors' && computerSelection === 'lizard') {
      this.player1.wins++;
      this.draw = false;
    } else if (humanSelection === 'scissors' && computerSelection === 'alien') {
      this.player2.wins++;
      this.draw = false;
    } else if (humanSelection === 'lizard' && computerSelection === 'rock') {
      this.player2.wins++;
      this.draw = false;
    } else if (humanSelection === 'lizard' && computerSelection === 'paper') {
      this.player1.wins++;
      this.draw = false;
    } else if (humanSelection === 'lizard' && computerSelection === 'scissors') {
      this.player2.wins++;
      this.draw = false;
    } else if (humanSelection === 'alien' && computerSelection === 'rock') {
      this.player1.wins++;
      this.draw = false;
    } else if (humanSelection === 'alien' && computerSelection === 'paper') {
      this.player2.wins++;
      this.draw = false;
    } else if (humanSelection === 'alien' && computerSelection === 'scissors') {
      this.player1.wins++;
      this.draw = false;
    } else if (humanSelection === 'lizard' && computerSelection === 'alien') {
      this.player1.wins++;
      this.draw = false;
    } else if (humanSelection === 'alien' && computerSelection === 'lizard') {
      this.player2.wins++;
      this.draw = false;
    } else {
      this.draw = true;
    }
  }

  resetPlayers() {
    this.player1.humanSelection = '';
    this.player2.computerSelection = '';
  }
}