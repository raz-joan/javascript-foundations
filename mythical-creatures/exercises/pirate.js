class Pirate {
  constructor(name, job) {
    this.name = name;
    if (job) {
      this.job = job;
    } else {
      this.job = 'scallywag';
    }
    this.cursed = false;
  }

  robShip() {
    return 'YAARRR!';
  }
}

module.exports = Pirate;
