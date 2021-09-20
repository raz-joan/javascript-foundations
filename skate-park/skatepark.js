class SkatePark {
  constructor(skatepark) {
    this.name = skatepark.name;
    this.yearFounded = skatepark.year;
    this.style = skatepark.type;
    this.features = skatepark.features;
    this.isPrivate = skatepark.isPrivate || false;
    this.cost = skatepark.price || 0;
    this.occupants = [];
  }

  admit(skater) {
    if (this.isPrivate) {
      if (skater.money >= this.cost) {
        if (this.occupants.length < 3) {
          skater.money -= this.cost;
          this.occupants.push(skater);
          return `Welcome to ${this.name}, the cost will be $${this.cost}.00.`;
        } else {
          return "Sorry, we are at max capacity. Thank you for understanding.";
        }
      } else {
        return "Sorry, you don't have enough money.";
      }
    } else {
      this.occupants.push(skater);
      return `Welcome to the free ${this.name} Skatepark!`;
    }
  }
}

module.exports = SkatePark;
