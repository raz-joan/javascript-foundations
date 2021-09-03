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
}

module.exports = Magician;
