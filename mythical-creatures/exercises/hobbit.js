class Hobbit {
  constructor(name) {
    this.name = name.name;
    this.age = 0;
  }

  celebrateBirthday() {
    return this.age++;
  }
}

module.exports = Hobbit;
