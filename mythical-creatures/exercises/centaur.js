class Centaur {
  constructor (name) {
    this.name = name.name;
    this.breed = name.type;
    this.cranky = false;
    this.standing = true;
    this.moodMeter = 0;
  }
  shootBow() {
    this.moodMeter++;
    if (this.moodMeter >= 3) {
      this.cranky = true;
      return 'NO!';
    } else {
      return "Twang!!!";
    }
  }
  run() {
    this.moodMeter++;
    if (this.moodMeter >= 3) {
      this.cranky = true;
      return 'NO!';
    } else {
      return 'Clop clop clop clop!!!';
    }
  }
}

module.exports = Centaur;
