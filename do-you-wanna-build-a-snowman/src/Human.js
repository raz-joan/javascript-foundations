var Snowman = require('./Snowman');

class Human {
  constructor(name) {
    this.name = name;
    this.wantsToBuildASnowman = true;
    this.materials = {
      snowballs: 0,
      coal: 0,
      buttons: 0,
      carrots: 0
    };
  }

  gatherMaterials(item, number) {
    this.materials[item] += number;
  }

  buildASnowman() {
    var snowman = {
      carrots: this.materials.carrots,
      coal: this.materials.coal,
      buttons: this.materials.buttons,
      snowballs: this.materials.snowballs
    }
    var builtsnowman = new Snowman(snowman);
    return builtsnowman;
  }

  placeMagicHat() {
    var snowman = this.buildASnowman();
    snowman.canWearMagicHat();
    if (snowman.magicHat) {
      return "Woah, this snowman is coming to life!";
    } else {
      return "I guess I didn't build it correctly.";
    }
  }
}

module.exports = Human;
