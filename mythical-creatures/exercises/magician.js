class Magician {
  constructor(magician) {
    this.name = `The Great ${magician.name}`;
    this.assistant = magician.assistant;
    if (magician.clothing) {
      this.favoriteAccessory = magician.clothing;
    } else {
      this.favoriteAccessory = 'top hat';
    }
  }

  performIncantation(spell) {
    return spell.toUpperCase() + "!";
  }

  performTrick() {
    if (this.favoriteAccessory === 'top hat') {
      return 'PULL RABBIT FROM TOP HAT';
    } else {
      return 'PULL DOVE FROM SLEEVE';
    }
  }
}

module.exports = Magician;
