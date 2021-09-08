// const Stark = require('../exercises/stark');

class Direwolf {
  constructor(name, home, size) {
    this.name = name;
    if (home) {
      this.home = home;
    } else {
      this.home = 'Beyond the Wall';
    }
    if (size) {
      this.size = size;
    } else {
      this.size = 'Massive';
    }
    this.starksToProtect = [];
    this.huntsWhiteWalkers = true;
  }

  protect(stark) {
    if (this.home === stark.location) {
      if(this.starksToProtect.length < 2) {
        stark.safe = true;
        this.starksToProtect.push(stark);
        this.huntsWhiteWalkers = false;
      }
    }
  }

  leave(stark) {
    for (var i = 0; i < this.starksToProtect.length; i++) {
      if (this.starksToProtect[i] === stark) {
        this.starksToProtect.splice(i, 1);
        stark.safe = false;
      }
    }
  }
}

module.exports = Direwolf;
