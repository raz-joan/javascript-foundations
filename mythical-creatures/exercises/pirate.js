class Pirate {
  constructor(name, job) {
    this.name = name;
    if (job) {
      this.job = job;
    } else {
      this.job = 'scallywag';
    }
    this.cursed = false;
    this.booty = 0;
  }

  robShip() {
    this.booty += 100;
    return 'YAARRR!';
  }
}

module.exports = Pirate;
