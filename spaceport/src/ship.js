var Being = require('../src/being');
var Part = require('../src/part');

class Ship {
  constructor(ship) {
    this.name = ship.name;
    this.type = ship.type;
    this.maxCrew = ship.maxCrew;
    this.odometer = ship.odometer || 0;
    this.fuelCapacity = ship.fuelCapacity || 10;
    this.fuel = 0;
    this.captain = ship.captain;
    this.crew = [];
    this.cargo = [];
    this.parts = ship.parts || {};
    this.readyToFly = false;
  }

  addCrew(crew) {
    for (var i = 0; i < crew.length; i++) {
      if (this.crew.length < this.maxCrew && crew[i] instanceof Being) {
        this.crew.push(crew[i]);
      }
    }
  }

  loadCargo(part) {
    if(part instanceof Part) {
      this.cargo.push(part);
    }
  }

  updatePart(part) {
    if (this.parts.hasOwnProperty(part.type)) {
      var originalValue = this.parts[part.type].value;
      this.parts[part.type] = part;
      return originalValue - this.parts[part.type].value;
    } else {
      this.parts[part.type] = part;
    }
  }

  checkReadiness() {
    if (!this.captain) {
      return "Cannot fly without a captain";
    } else if (!this.fuel) {
      return "Cannot fly without fuel";
    } else if (!(Object.keys(this.parts).length)) {
      return "Cannot fly without parts";
    } else {
      this.readyToFly = true;
      return "Good to go!";
    }
  }
}

module.exports = Ship;
