class Game {
  constructor() {
    this.player1 = new Player('Player 1', '👦');
    this.player2 = new Player('PLayer 2', '🤖');
    this.draw = false;
  }

  gamePlay() {
    var humanSelection = this.player1.assignHumanPlayerSelection();
    var computerSelection = this.player2.assignComputerPlayerSelection();

    if (humanSelection === 'rock' && computerSelection === 'rock') {
      this.draw = true;
    } else if (humanSelection === 'rock' && computerSelection === 'paper') {
      this.player2.wins++;
    } else if (humanSelection === 'rock' && computerSelection === 'scissors') {
      this.player1.wins++;
    } else if (humanSelection === 'paper' && computerSelection === 'rock') {
      this.player1.wins++;
    } else if (humanSelection === 'paper' && computerSelection === 'paper') {
      this.draw = true;
    } else if (humanSelection === 'paper' && computerSelection === 'scissors') {
      this.player2.wins++;
    } else if (humanSelection === 'scissors' && computerSelection === 'rock') {
      this.player2.wins++;
    } else if (humanSelection === 'scissors' && computerSelection === 'paper') {
      this.player1.wins++;
    } else if (humanSelection === 'scissors' && computerSelection === 'scissors') {
      this.draw = true;
    }
  }
}