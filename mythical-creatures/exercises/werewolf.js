class Werewolf {
  constructor(name) {
    this.name = name;
    this.form = 'human';
    this.hungry = false;
  }

  completeTransformation() {
    if (this.form === 'human') {
      this.form = 'wolf';
      this.hungry = true;
      return 'Aaa-Woooo!';
    } else if (this.form === 'wolf') {
      this.form = 'human';
      this.hungry = false;
      return "Where are I?";
    }
  }

  eatVictim(humanVictim) {
    if (this.form === 'human') {
      return `No way am I eating ${humanVictim.name}, I'd like a burger!`;
    }
    humanVictim.alive = false;
    this.form = 'human';
    return `Yum, ${humanVictim.name} was delicious.`;
  }
}

module.exports = Werewolf;
