class GolfCourse {
  constructor(courseName, courseDifficulty, openTimes, courseFeatures) {
    this.name = courseName;
    this.difficulty = courseDifficulty;
    this.openings = openTimes;
    this.features = courseFeatures;
    this.currentlyPlaying = [];
    this.successfulCheckIn = "";
    this.deniedCheckIn = "";
  }

  checkInGroup(group) {
    if (this.openings >= group.length) {
      this.openings -= group.length;
      for (var i = 0; i < group.length; i++) {
        this.currentlyPlaying.unshift(group[i].name);
      }
      this.successfulCheckIn = "You're checked in. Have fun!";
    } else {
      this.deniedCheckIn = "Sorry, we are currently booked! Please come back later.";
    }
  }

}


module.exports = GolfCourse;
