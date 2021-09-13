class Runner {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.milesRun = 0;
    this.fitness = 25;
    this.completedRaces = [];
  }

  runSomeMiles(number) {
    this.milesRun += number;
    this.fitness += number;
  }

  stretch() {
    this.fitness += 0.5;
  }

  runRace(raceName, distance) {
    this.completedRaces.push(raceName);
    this.runSomeMiles(distance);
  }
}

module.exports = Runner;
