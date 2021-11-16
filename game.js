class Game {
  constructor() {
    this.player1 = new Player('Player 1', '👦');
    this.player2 = new Player('Player 2', '🤖');
    this.humanWon = false;
    this.computerWon = false;
    this.draw = false;
  }

  winConditions() {
    var humanSelection = this.player1.takeTurn().humanSelection;
    var computerSelection = this.player2.takeTurn().computerSelection;

    if (
      humanSelection === 'rock' && computerSelection === 'rock'
      || humanSelection === 'paper' && computerSelection === 'paper'
      || humanSelection === 'scissors' && computerSelection === 'scissors'
      || humanSelection === 'lizard' && computerSelection === 'lizard'
      || humanSelection === 'alien' && computerSelection === 'alien'
    ){
      this.humanWon = false;
      this.computerWon = false;
      this.draw = true;
    } else if (
      humanSelection === 'rock' && computerSelection === 'scissors'
      || humanSelection === 'rock' && computerSelection === 'lizard'
      || humanSelection === 'paper' && computerSelection === 'rock'
      || humanSelection === 'paper' && computerSelection === 'alien'
      || humanSelection === 'scissors' && computerSelection === 'paper'
      || humanSelection === 'scissors' && computerSelection === 'lizard'
      || humanSelection === 'lizard' && computerSelection === 'paper'
      || humanSelection === 'lizard' && computerSelection === 'alien'
      || humanSelection === 'alien' && computerSelection === 'rock'
      || humanSelection === 'alien' && computerSelection === 'scissors'
    ){
      this.player1.wins++;
      this.humanWon = true;
      this.computerWon = false;
      this.draw = false;
      this.player1.saveWinsToStorage();
    } else if (
      humanSelection === 'rock' && computerSelection === 'paper'
      || humanSelection === 'rock' && computerSelection === 'alien'
      || humanSelection === 'paper' && computerSelection === 'scissors'
      || humanSelection === 'paper' && computerSelection === 'lizard'
      || humanSelection === 'scissors' && computerSelection === 'rock'
      || humanSelection === 'scissors' && computerSelection === 'alien'
      || humanSelection === 'lizard' && computerSelection === 'rock'
      || humanSelection === 'lizard' && computerSelection === 'scissors'
      || humanSelection === 'alien' && computerSelection === 'paper'
      || humanSelection === 'alien' && computerSelection === 'lizard'
    ){
      this.player2.wins++;
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

  selectionTimeout(button) {
    setTimeout(function() {checkSelection(button)}, 250);
  }

  clearWinnerTimeout() {
    clearTimeout(this.timeout);
  }

  browserSpeak() {
    var compliments = ['You\'re the bees knees', 'Great job', 'I believe in you', 'You make my day brighter'];
    var taunts = ['Robots will rule the world', 'Better luck next time', 'Let\'s play again', 'Don\'t feel too bad'];
    var randomIndex = this.player1.getRandomIndex(compliments);

    var congratulations = new SpeechSynthesisUtterance(`Congratulations player 1. ${compliments[randomIndex]}.`);
    var betterLuckNextTime = new SpeechSynthesisUtterance(`Sorry player 1. You lost. ${taunts[randomIndex]}.`);
    var draw = new SpeechSynthesisUtterance('Looks like it\'s a draw.');
    
    if (this.humanWon){
      speechSynthesis.speak(congratulations);
    } else if (this.computerWon) {
      speechSynthesis.speak(betterLuckNextTime);
    } else {
      speechSynthesis.speak(draw);
    }
  }
}
