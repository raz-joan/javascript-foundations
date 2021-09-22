class Bag {
  constructor() {
    this.empty = true;
    this.count = 0;
    this.candies = [];
  }

  fill(newCandy) {
    this.candies.push(newCandy);
    this.count = this.candies.length;
  }

  contains(candyName) {
    for (var i = 0; i < this.candies.length; i++) {
      if (candyName === this.candies[i].type) {
        return true;
      }
    }
    return false;
  }
}

module.exports = Bag;
