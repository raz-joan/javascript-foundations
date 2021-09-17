class Part {
  constructor(newPart) {
    this.name = newPart.name;
    this.type = newPart.type;
    this.value = newPart.value;
    this.broken = false
    if (!this.name) {
      this.checkForValidity = 'This part needs a name!';
      this.isValid = false;
    } else if (!this.type) {
      this.checkForValidity = 'This part needs a type!';
      this.isValid = false;
    } else if (!this.value) {
      this.checkForValidity = 'This part needs a value!';
      this.isValid = false;
    } else {
      this.isValid = true;
    }
  }
}

module.exports = Part;
