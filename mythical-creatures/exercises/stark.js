const Direwolf = require('../exercises/direwolf');

class Stark {
  constructor(thing) {
    if (thing) {
      this.name = thing.name;
    }
    if (thing && thing.area) {
      this.location = thing.area;
    } else {
      this.location = 'Winterfell';
    }
    this.safe = false;
  }

  sayHouseWords() {
    if (this.safe) {
      return 'The North Remembers';
    } else {
      return 'Winter is Coming';
    }
  }

  callDirewolf(name) {
    const direwolf = new Direwolf (name, this.location);
    direwolf.protect(this);
    return direwolf;
  }
}

module.exports = Stark;
