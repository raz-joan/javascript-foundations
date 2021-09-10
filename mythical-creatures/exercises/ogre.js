class Ogre {
  constructor(creature) {
    this.name = creature.name;
    this.home = creature.abode || 'Swamp';
    this.swings = 0;
  }

  encounter(person) {
    person.encounterCounter++;
  }

  swingAt(person) {
    this.swings++;
  }
}

module.exports = Ogre;
