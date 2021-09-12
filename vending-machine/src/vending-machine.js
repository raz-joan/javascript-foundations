class VendingMachine {
  constructor(machine) {
    this.id = machine.id;
    this.isBroken = machine.isBroken;
    this.snacks = [];
  }

  addSnacks(item) {
    for (var i = 0; i < this.snacks.length; i++) {
      if (this.snacks[i].name === item.name) {
        return 'Sorry, that snack is already stocked! Try adding a different snack.';
      }
    }
    this.snacks.push(item);
  }
}

module.exports = VendingMachine;
