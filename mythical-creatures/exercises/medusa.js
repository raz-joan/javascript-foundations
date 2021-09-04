var Person = require('./person');
var Statue = require('./statue');
class Medusa {
  constructor (name) {
    this.name = name;
    this.statues = [];
  }

  gazeAtVictim(victim) {
    var statue = new Statue(victim.name);
    if (this.statues.length < 3) {
      this.statues.push(statue);
    } else {
      var person = new Person(this.statues[0].name);
      this.statues.shift();
      this.statues.push(statue);
      return person;
    }
  }
}

module.exports = Medusa;
