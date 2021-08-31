class Vampire {
  constructor(name, pet) {
    this.name = name;
    if (pet) {
      this.pet = pet;
    } else {
      this.pet = 'bat';
    }
    this.thirsty = true;
  }

  drink() {
    this.thirsty = false;
  }
}

module.exports = Vampire;
