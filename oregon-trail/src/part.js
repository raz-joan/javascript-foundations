class Part {
  constructor(type) {
    this.type = type;
    this.broken = false;
    this.numTimesBroken = 0;
  }

  break() {
    this.numTimesBroken++;
    this.broken = true;
  }

  repair() {
    if (this.numTimesBroken >= 2) {
      return `This ${this.type} has seen better days, we'll need a brand new one!`;
    } else {
      this.broken = false;
    }
  }
}

module.exports = Part;
