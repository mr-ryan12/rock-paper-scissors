class Game {
  constructor() {
    this.player1 = new Player('Player 1', '👦');
    this.player2 = new Player('Player 2', '🤖');
    this.humanWon = false;
    this.computerWon = false;
    this.draw = false;
  }

  gamePlay() {
    var humanSelection = this.player1.assignHumanPlayerSelection();
    var computerSelection = this.player2.takeTurn();

    if (humanSelection === 'rock' && computerSelection === 'rock') {
      this.humanWon = false;
      this.computerWon = false;
      this.draw = true;
    } else if (humanSelection === 'rock' && computerSelection === 'paper') {
      this.player2.computerWins++;
      this.humanWon = false;
      this.computerWon = true;
      this.draw = false;
      this.player2.saveWinsToStorage();
    } else if (humanSelection === 'rock' && computerSelection === 'scissors') {
      this.player1.humanWins++;
      this.humanWon = true;
      this.computerWon = false;
      this.draw = false;
      this.player1.saveWinsToStorage();
    } else if (humanSelection === 'rock' && computerSelection === 'lizard') {
      this.player1.humanWins++;
      this.humanWon = true;
      this.computerWon = false;
      this.draw = false;
      this.player1.saveWinsToStorage();
    } else if (humanSelection === 'rock' && computerSelection === 'alien') {
      this.player2.computerWins++;
      this.humanWon = false;
      this.computerWon = true;
      this.draw = false;
      this.player2.saveWinsToStorage();
    } else if (humanSelection === 'paper' && computerSelection === 'paper') {
      this.humanWon = false;
      this.computerWon = false;
      this.draw = true;
    } else if (humanSelection === 'paper' && computerSelection === 'rock') {
      this.player1.humanWins++;
      this.humanWon = true;
      this.computerWon = false;
      this.draw = false;
      this.player1.saveWinsToStorage();
    } else if (humanSelection === 'paper' && computerSelection === 'scissors') {
      this.player2.computerWins++;
      this.humanWon = false;
      this.computerWon = true;
      this.draw = false;
      this.player2.saveWinsToStorage();
    } else if (humanSelection === 'paper' && computerSelection === 'lizard') {
      this.player2.computerWins++;
      this.humanWon = false;
      this.computerWon = true;
      this.draw = false;
      this.player2.saveWinsToStorage();
    } else if (humanSelection === 'paper' && computerSelection === 'alien') {
      this.player1.humanWins++;
      this.humanWon = true;
      this.computerWon = false;
      this.draw = false;
      this.player1.saveWinsToStorage();
    } else if (humanSelection === 'scissors' && computerSelection === 'scissors') {
      this.humanWon = false;
      this.computerWon = false;
      this.draw = true;
    } else if (humanSelection === 'scissors' && computerSelection === 'rock') {
      this.player2.computerWins++;
      this.humanWon = false;
      this.computerWon = true;
      this.draw = false;
      this.player2.saveWinsToStorage();
    } else if (humanSelection === 'scissors' && computerSelection === 'paper') {
      this.player1.humanWins++;
      this.humanWon = true;
      this.computerWon = false;
      this.draw = false;
      this.player1.saveWinsToStorage();
    } else if (humanSelection === 'scissors' && computerSelection === 'lizard') {
      this.player1.humanWins++;
      this.humanWon = true;
      this.computerWon = false;
      this.draw = false;
      this.player1.saveWinsToStorage();
    } else if (humanSelection === 'scissors' && computerSelection === 'alien') {
      this.player2.computerWins++;
      this.humanWon = false;
      this.computerWon = true;
      this.draw = false;
      this.player2.saveWinsToStorage();
    } else if (humanSelection === 'lizard' && computerSelection === 'lizard') {
      this.humanWon = false;
      this.computerWon = false;
      this.draw = true;
    } else if (humanSelection === 'lizard' && computerSelection === 'rock') {
      this.player2.computerWins++;
      this.humanWon = false;
      this.computerWon = true;
      this.draw = false;
      this.player2.saveWinsToStorage();
    } else if (humanSelection === 'lizard' && computerSelection === 'paper') {
      this.player1.humanWins++;
      this.humanWon = true;
      this.computerWon = false;
      this.draw = false;
      this.player1.saveWinsToStorage();
    } else if (humanSelection === 'lizard' && computerSelection === 'scissors') {
      this.player2.computerWins++;
      this.humanWon = false;
      this.computerWon = true;
      this.draw = false;
      this.player2.saveWinsToStorage();
    } else if (humanSelection === 'lizard' && computerSelection === 'alien') {
      this.player1.humanWins++;
      this.humanWon = true;
      this.computerWon = false;
      this.draw = false;
      this.player1.saveWinsToStorage();
    } else if (humanSelection === 'alien' && computerSelection === 'alien') {
      this.humanWon = false;
      this.computerWon = false;
      this.draw = true;
    } else if (humanSelection === 'alien' && computerSelection === 'rock') {
      this.player1.humanWins++;
      this.humanWon = true;
      this.computerWon = false;
      this.draw = false;
      this.player1.saveWinsToStorage();
    } else if (humanSelection === 'alien' && computerSelection === 'paper') {
      this.player2.computerWins++;
      this.humanWon = false;
      this.computerWon = true;
      this.draw = false;
      this.player2.saveWinsToStorage();
    } else if (humanSelection === 'alien' && computerSelection === 'scissors') {
      this.player1.humanWins++;
      this.humanWon = true;
      this.computerWon = false;
      this.draw = false;
      this.player1.saveWinsToStorage();
    } else if (humanSelection === 'alien' && computerSelection === 'lizard') {
      this.player2.computerWins++;
      this.humanWon = false;
      this.computerWon = true;
      this.draw = false;
      this.player2.saveWinsToStorage();
    }
  }

  reset() {
    this.player1.humanSelection = '';
    this.player2.computerSelection = '';
    rockSelectionButton.classList.remove('selected');
    paperSelectionButton.classList.remove('selected');
    scissorsSelectionButton.classList.remove('selected');
    lizardSelectionButton.classList.remove('selected');
    alienSelectionButton.classList.remove('selected');
  }
}