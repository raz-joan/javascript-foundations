class Vampire {
  constructor(name, pet) {
    this.name = name;
    if (pet) {
      this.pet = pet;
    } else {
      this.pet = 'bat';
    }
  }
}

module.exports = Vampire;
