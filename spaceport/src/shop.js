var Part = require('../src/part');

class Shop {
  constructor(shop) {
    this.name = shop.name;
    this.inventory = {};
  }

  addInventory(part) {
    if (part instanceof Part) {
      this.inventory[part.type] = part;
    }
  }

  outfitShip(ship, partType) {
    if (ship.captain) {
      if (ship.captain.credits < this.inventory[partType].value) {
        return `you require ${this.inventory[partType].value} more credits to make this purchase`;
      } else {
        ship.captain.credits -= this.inventory[partType].value;
        ship.updatePart(this.inventory[partType]);
        this.inventory[partType] = undefined;
        return 'shell added to ship';
      }
    } else {
      return 'cannot outfit a ship without a captain';
    }
  }
}

module.exports = Shop;
