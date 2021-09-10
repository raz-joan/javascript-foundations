class Ogre {
  constructor(creature) {
    this.name = creature.name;
    this.home = creature.abode || 'Swamp';
    this.swings = 0;
  }

  encounter(person) {
    person.encounterCounter++;
    if (person.encounterCounter && !(person.encounterCounter % 3)) {
      this.swingAt();
    }
    if (person.encounterCounter && !(person.encounterCounter % 2)) {
      person.knockedOut = true;
    }
  }

  swingAt(person) {
    this.swings++;
  }

  apologize(person) {
    person.knockedOut = false;
  }
}

module.exports = Ogre;
