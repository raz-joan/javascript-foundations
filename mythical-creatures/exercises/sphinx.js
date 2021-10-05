class Sphinx {
  constructor() {
    this.riddles = [];
    this.heroesEaten = 0;
  }

  collectRiddle(riddle) {
    if (this.riddles.length < 3) {
      this.riddles.push(riddle);
    } else if (this.riddles.length = 3) {
      this.riddles.shift();
      this.riddles.push(riddle);
    }
  }

  attemptAnswer(riddleAnswer) {
    for (var i = 0; i < this.riddles.length; i++) {
      if (this.riddles[i].answer === riddleAnswer) {
        this.riddles.splice(i, 1);
        if (this.riddles.length > 0) {
          return 'That wasn\'t that hard, I bet you don\'t get the next one';
        } else {
          return `PSSSSSSS THIS HAS NEVER HAPPENED, HOW DID YOU KNOW THE ANSWER WAS "${riddleAnswer}"???`;
        }
      }
    }
    this.heroesEaten++;
  }
}

module.exports = Sphinx;
