class Unicorn {
  constructor(name, color) {
    this.name = name;
    if (color) {
      this.color = color;
    } else {
      this.color = 'white';
    }
  }

  isWhite() {
    if (this.color === 'white') {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = Unicorn;
