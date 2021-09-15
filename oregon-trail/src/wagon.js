class Wagon {
  constructor(wagon) {
    this.title = wagon.name;
    this.wheels = wagon.wheels || [];
    this.axles = wagon.axles || [];
    this.oxen = wagon.oxen || [];
    this.yokes = wagon.yokes || [];
    this.food = wagon.food;
    this.ammunition = wagon.ammunition;
    this.clothes = wagon.clothes;
    this.settlers = wagon.settlers || [];
  }

  addPart(part) {
    if (part.type === 'ox') {
      this[part.type + 'en'].push(part);
    } else {
      this[part.type + 's'].push(part);
    }
  }

  canTravel() {
    if (this.wheels.length >= 4 && this.axles.length > 1 && this.oxen.length >= 2 && this.yokes.length >= 1 && this.settlers.length >= 1) {
      var workingWheels = [];
      for (var i = 0; i < this.wheels.length; i++) {
        if (!this.wheels[i].broken) {
          workingWheels.push(this.wheels[i]);
        }
      }
      var workingAxles = [];
      for (var i = 0; i < this.axles.length; i++) {
        if (!this.axles[i].broken) {
          workingAxles.push(this.axles[i]);
        }
      }
      var workingOxen = [];
      for (var i = 0; i < this.oxen.length; i++) {
        if (!this.oxen[i].broken) {
          workingOxen.push(this.oxen[i]);
        }
      }
      var livingSettlers = [];
      for (var i = 0; i < this.settlers.length; i++) {
        if (this.settlers[i].status !== 'dead') {
          livingSettlers.push(this.settlers[i]);
        }
      }
      if (workingWheels.length >= 4 && workingAxles.length >= 2 && workingOxen.length >= 2 && this.yokes.length >= 0.5 *this.oxen.length && livingSettlers.length >= 1) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
}

module.exports = Wagon;
