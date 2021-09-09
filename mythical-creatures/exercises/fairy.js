class Fairy {
  constructor(name) {
    this.name = name;
    this.dust = 10;
    this.disposition = 'Good natured';
    this.numStolenInfants = 0;
    this.humanWards = [];
    this.clothes = {
      dresses: ['Iris'],
    }
  }
  receiveBelief() {
    this.dust++;
  }
  believe() {
    this.dust += 10;
  }
  makeDresses(flowers) {
    for (var i = 0; i < flowers.length; i++) {
      this.clothes.dresses.push(flowers[i]);
    }
  }
  becomeProvoked() {
    this.disposition = 'Vengeful';
  }
  replaceInfant(infant) {
    this.numStolenInfants++;
    if (this.numStolenInfants === 3) {
      this.disposition = 'Good natured';
    }
    if (this.disposition === 'Vengeful') {
      this.humanWards.push(infant);
      infant.disposition = 'Malicious';
      return infant;
    } else {
      return infant;
    }
  }
}

module.exports = Fairy;
