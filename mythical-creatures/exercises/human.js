// const Ogre = require('../exercises/ogre');

class Human {
  constructor(name) {
    this.name = name;
    this.encounterCounter = 0;
  }

  noticesOgre() {
    if (this.encounterCounter && !(this.encounterCounter % 3)) {
      // var ogre = new Ogre({name: 'Brak'});
      // ogre.swingAt(this);
      return true;
    } else {
      return false;
    }
  }
}

module.exports = Human;
