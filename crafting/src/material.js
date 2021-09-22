class Material {
  constructor(item, price, amount, units) {
    this.name = item;
    this.price = price;
    this.amount = amount;
    this.units = units;
  }

  useMaterial(amountOfItemUsed) {
    if (this.amount >= amountOfItemUsed) {
      this.amount -= amountOfItemUsed;
      return `You now have ${this.amount} ${this.units} of ${this.name} left.`;
    } else {
      return `You don't have enough ${this.name}! Try using ${this.amount} ${this.units} or less.`;
    }
  }

  calculateMaterialCost() {
    return this.amount * this.price;
  }
}

module.exports = Material;
