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
    this.shipsRobbed = 0;
  }

  robShip() {
    this.booty += 100;
    this.shipsRobbed++;
    if (this.shipsRobbed <= 5) {
      return 'YAARRR!';
    } else {
      this.booty -= 100;
      this.cursed = true;
      return "ARG! I've been cursed!";
    }
  }
}

module.exports = Pirate;
