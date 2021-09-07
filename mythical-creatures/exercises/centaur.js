class Centaur {
  constructor (name) {
    this.name = name.name;
    this.breed = name.type;
    this.cranky = false;
    this.standing = true;
  }
  shootBow() {
    return "Twang!!!";
  }
  run() {
    return 'Clop clop clop clop!!!';
  }
}

module.exports = Centaur;
