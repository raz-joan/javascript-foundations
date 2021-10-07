class Planet {
  constructor(planet) {
    this.name = planet.name;
    this.shop = planet.shop;
    this.currentShip;
    this.coordinates = planet.coordinates;
  }

  landShip(ship) {
    this.currentShip = ship;
  }

  calculateDistance(anotherPlanet) {
    return Math.sqrt(Math.pow((anotherPlanet.coordinates.x - this.coordinates.x), 2) + Math.pow((anotherPlanet.coordinates.y - this.coordinates.y), 2) + Math.pow((anotherPlanet.coordinates.z - this.coordinates.z), 2));
  }

  refuel(ship) {
    ship.fuel = ship.fuelCapacity;
  }

  giveClearance(anotherPlanet) {
    if (!this.currentShip.fuel) {
      return "Clearance denied: Cannot fly without fuel";
    } else {
      this.currentShip.fuel = 0;
      anotherPlanet.landShip(this.currentShip);
      this.currentShip = undefined;
      return `Clearance granted: Enjoy your trip to ${anotherPlanet.name}`;
    }
  }
}

module.exports = Planet;
