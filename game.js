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
    } else {
      this.draw = true;
    }
    console.log(humanSelection);
    console.log(computerSelection);
    console.log(this.player1.wins);
    console.log(this.player2.wins);
    console.log(this.draw);
  }
}