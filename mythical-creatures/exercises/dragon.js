class Dragon {
  constructor(name, rider) {
    this.name = name;
    this.rider = rider;
    this.hungry = true;
  }

  greet() {
    return `Hi, ${this.rider}!`;
  }

  // eat(var i = [0]) {
  //   i[0] += 1;
  //   console.log(i[0]);
  //   if (i[0] === 3) {
  //     this.hungry = false;
  //   }
  //   return i[0];
  // }
    // var count = 0;
    // eat() {
    //   count++;
    //   if (count === 3) {
    //     this.hungry = false;
    //   };
    //   return count;
    // }
  // eat(count) {
  //   if (count === 3) {
  //       this.hungry = false;
  //     } else {
  //       count++;
  //       return count;
  //     }
  //   }

  eat() {
    var count = 0;
    function addCount() {
      count++;
    }
    addCount();
    console.log(count);
    if (count === 3) {
      this.hungry = false;
    }
    return count;
    }

}

module.exports = Dragon;
