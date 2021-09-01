class Hobbit {
  constructor(name) {
    this.name = name.name;
    this.age = 0;
    this.adult = false;
  }

  celebrateBirthday() {
    this.age++;
    if (this.age > 32) {
      this.adult = true;
    }
  }

}

module.exports = Hobbit;
