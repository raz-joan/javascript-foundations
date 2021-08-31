class Unicorn {
  constructor(name, color) {
    this.name = name;
    if (color) {
      this.color = color;
    } else {
      this.color = 'white';
    }
  }
}

module.exports = Unicorn;
