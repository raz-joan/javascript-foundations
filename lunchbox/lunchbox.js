class LunchBox {
  constructor(lunchbox) {
    this.owner = lunchbox.owner;
    this.material = lunchbox.madeOf;
    this.shape = lunchbox.shape;
    this.color = lunchbox.color;
    this.snacks = [];
  }

  acquireSnack(snack) {
    this.snacks.push(snack);
    snack.isInLunchBox = true;
  }

  findHealthySnacks() {
    var healthySnacks = [];
    for (var i = 0; i < this.snacks.length; i++) {
      if (this.snacks[i].checkForHealthy()) {
        healthySnacks.push(this.snacks[i].type);
      }
    }
    return healthySnacks;
  }
}

module.exports = LunchBox;

// search snacks array
// check if element at each index is 'healthy'
// if yes, add to new array
