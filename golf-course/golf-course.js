class GolfCourse {
  constructor(name, difficulty, openings, features) {
    this.name = name;
    this.difficulty = difficulty;
    this.openings = openings;
    this.features = features;
    this.currentlyPlaying = [];
    this.successfulCheckIn = "You're checked in. Have fun!";
    this.deniedCheckIn = 'Sorry, we are currently booked! Please come back later.';
  }

  checkInGroup(group) {
    if (this.openings >= group.length) {
      this.openings -= group.length;
      for (var i = 0; i < group.length; i++) {
        this.currentlyPlaying.unshift(group[i].name);
      }
    }
  }
}


module.exports = GolfCourse;
