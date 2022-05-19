function Hangman(word) {
  this.word = word.toLowerCase();
  this.errorsLeft = 6;
  this.guessedWrong = [];
  this.guessedString = '_'.repeat(this.word.length);

  this.getGuessedString = () => this.guessedString;

  this.getErrorsLeft = () => this.errorsLeft;

  this.getWrongSymbols = () => this.guessedWrong;

  this.getStatus = () => `${this.guessedString} | errors left ${this.errorsLeft}`;

  this.startAgain = (newWord) => {
    this.word = newWord.toLowerCase();
    this.errorsLeft = 6;
    this.guessedWrong = [];
    this.guessedString = '_'.repeat(this.word.length);

    return this;
  };

  this.guess = (letter) => {
    if (this.errorsLeft === 0) {
      return 'Game over';
    }
    if (this.word.includes(letter.toLowerCase())) {
      const letters = this.word.split('');
      const guessedLetters = this.guessedString.split('');

      letters.forEach((wordLetter, index) => {
        if (wordLetter === letter.toLowerCase()) guessedLetters[index] = letter.toLowerCase();
      });

      this.guessedString = guessedLetters.join('');

      if (this.guessedString === this.word) {
        return `${this.guessedString} | You won!`;
      }

      return this.guessedString;
    }
    this.guessedWrong.push(letter);
    this.errorsLeft -= 1;

    return `wrong letter, errors left ${this.errorsLeft} | ${this.guessedWrong}`;
  };
}

const hangman = new Hangman('webpurple');

module.exports = hangman;
