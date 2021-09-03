class Magician {
  constructor(magician) {
    this.name = `The Great ${magician.name}`;
    this.assistant = magician.assistant;
    if (magician.clothing) {
      this.favoriteAccessory = magician.clothing;
    } else {
      this.favoriteAccessory = 'top hat';
    }
    this.confidencePercentage = 10;
  }

  performIncantation(spell) {
    return spell.toUpperCase() + "!";
  }

  performTrick() {
    this.confidencePercentage += 10;  
    if (this.favoriteAccessory === 'top hat') {
      return 'PULL RABBIT FROM TOP HAT';
    } else {
      return 'PULL DOVE FROM SLEEVE';
    }
  }
}

module.exports = Magician;
