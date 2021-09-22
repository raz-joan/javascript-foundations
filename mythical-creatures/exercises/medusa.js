var Statue = require('../exercises/statue');
var Person = require('../exercises/person');

class Medusa {
  constructor(name) {
    this.name = name;
    this.statues = [];
  }

  gazeAtVictim(person) {
    if (this.statues.length < 3) {
      var statue = new Statue(person.name)
      this.statues.push(statue);
    } else if (this.statues.length === 3) {
      var freedStatue = this.statues[0];
      this.statues.shift();
      var statue = new Statue(person.name)
      this.statues.push(statue);
      var freedPerson = new Person(freedStatue.name);
      freedPerson.mood = 'relieved';
      return freedPerson;
    }
  }
}

module.exports = Medusa;
