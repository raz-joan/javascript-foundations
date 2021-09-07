class Centaur {
  constructor (name) {
    this.name = name.name;
    this.breed = name.type;
    this.cranky = false;
    this.standing = true;
    this.layingDown = false;
    this.moodMeter = 0;
  }
  shootBow() {
    this.moodMeter++;
    if (this.layingDown) {
      return 'NO!';
    }
    if (this.moodMeter >= 3) {
      this.cranky = true;
      return 'NO!';
    } else {
      return "Twang!!!";
    }
  }
  run() {
    this.moodMeter++;
    if (this.layingDown) {
      return "NO!";
    }
    if (this.moodMeter >= 3) {
      this.cranky = true;
      return 'NO!';
    } else {
      return 'Clop clop clop clop!!!';
    }
  }
  sleep() {
    if (this.standing) {
      return 'NO!';
    } else {
      return "ZZZZ";
    }
  }
  layDown() {
    this.standing = false;
    this.layingDown = true;
  }
  standUp() {
    this.standing = true;
    this.layingDown = false;
  }
}

module.exports = Centaur;
