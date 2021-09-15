class Gear {
  constructor(item, number) {
    this.type = item;
    this.quantity = number;
  }
  checkForValidity() {
    if (this.type !== 'ammunition' && this.type !== 'food' && this.type !=='clothes') {
      var item = this.type;
      this.type = null;
      return `I don't think a ${item} will help us.`;
    } else {
      return `Great, we'll need lots of ${this.type}!`;
    }
  }
}

module.exports = Gear;
