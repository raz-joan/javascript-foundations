class Centaur {
  constructor (name) {
    this.name = name.name;
    this.breed = name.type;
  }
  shootBow() {
    return "Twang!!!"
  }
}

module.exports = Centaur;
