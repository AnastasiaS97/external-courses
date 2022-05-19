class Device {
  constructor(model) {
    this.power = model.power;
    this.turnedOn = model.turnedOn;
  }

  showInfo() {
    console.log(`Power: ${this.power}`);
  }

  turnOn() {
    if (this.turnedOn) {
      console.log('Already on');

      return 0;
    }
    this.turnedOn = true;
    console.log('Turned on');

    return 0;
  }

  turnOff() {
    if (!this.turnedOn) {
      console.log('Already off');

      return 0;
    }
    this.turnedOn = false;
    console.log('Turned off');

    return 0;
  }
}

module.exports = Device;
