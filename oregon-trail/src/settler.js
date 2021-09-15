class Settler {
  constructor(person) {
    this.name = person.name;
    this.age = person.age;
    this.nationality = person.nationality || 'unknown';
    this.status = 'healthy';
    this.ailments = [];
  }

  experienceDistress(distressEvent) {
    if (this.ailments.length <= 2) {
      this.ailments.push(distressEvent);
    }
    if (this.ailments.length === 1) {
      this.status = 'fair';
    } else if (this.ailments.length === 2) {
      this.status = 'poor';
    } else if (this.ailments.length === 3) {
      this.status = 'dead';
    }
  }

  heal() {
    if (this.status === 'dead') {
      return `Sorry, we can't heal a corpse. ${this.name} needs a proper burial!`;
    } else {
      this.ailments = [];
      this.status = 'healthy';
    }
  }
}

module.exports = Settler;
