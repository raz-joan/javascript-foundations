class Dragon {
  constructor(dragonName, riderName) {
    this.name = dragonName;
    this.rider = riderName;
    this.hungry = true;
    this.numTimesEaten = 0;
  }

  greet() {
    return `Hi, ${this.rider}!`;
  }
  eat() {
    this.numTimesEaten++;
    if (this.numTimesEaten === 3) {
      this.hungry = false;
    }
  }
}

module.exports = Dragon;
