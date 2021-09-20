class Ogre {
  constructor(ogre) {
    this.name = ogre.name;
    this.home = ogre.abode || 'Swamp';
    this.swings = 0;
  }

  encounter(human) {
    human.encounterCounter++;
    if (!(human.encounterCounter % 3) && human.encounterCounter) {
      this.swings++;
    }
    if (!(human.encounterCounter % 6) && human.encounterCounter) {
      human.knockedOut = true;
    }
  }

  swingAt() {
    this.swings++;
  }

  apologize(human) {
    human.knockedOut = false;
  }
}

module.exports = Ogre;
