var Skier = require('./Skier');

class Lift {
  constructor (numPeople) {
    this.inService = true;
    this.limit = numPeople;
    this.skiers = [];
    this.safetyBar = 'up';
  }

  admitSkier (name, liftTicket) {
    var skier = new Skier(name, liftTicket);
    if (skier.hasLiftTicket) {
      if (this.skiers.length < this.limit) {
        this.skiers.push(skier);
      } else {
        return `Sorry, ${skier.name}. Please wait for the next lift!`;
      }
    } else {
      return `Sorry, ${skier.name}. You need a lift ticket!`;
    }
  }

  startLift() {
    if (this.limit === this.skiers.length) {
      this.safetyBar = 'down';
    } else if (this.skiers.length < this.limit) {
      var spaceRemaining = this.limit - this.skiers.length;
      if (spaceRemaining === 1) {
        return `We still need ${spaceRemaining} more skier!`;
      } else {
        return `We still need ${spaceRemaining} more skiers!`;
      }
    }
  }
}

module.exports = Lift;
