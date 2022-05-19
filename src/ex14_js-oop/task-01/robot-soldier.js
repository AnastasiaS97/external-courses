const device = require('./device.js');

class RobotSoldier {
  constructor(model) {
    device.call(this, model);
    this.shootStatus = model.shootStatus;
    this.mapStatus = model.mapStatus;
  }

  showInfo() {
    console.log(`Power: ${this.power}, the map ${this.mapStatus}, shooting status: ${this.shootStatus}`);
  }

  startShooting() {
    if (!this.turnedOn) {
      console.log('The device is currently turned off. Please turn on the device first');

      return 0;
    }
    if (this.shootStatus === 'is shooting') {
      console.log('Already shooting');

      return 0;
    }
    this.shootingStatus = 'is shooting';
    console.log('The robot soldier is now shooting');

    return 0;
  }

  stopShooting() {
    if (!this.turnedOn) {
      console.log('The device is currently turned off. Please turn on the device first');

      return 0;
    }
    if (this.shootStatus === 'not shooting') {
      console.log('Already not shooting');

      return 0;
    }
    this.shootStatus = 'not shooting';
    console.log('The robot soldier has now stopped shooting');

    return 0;
  }

  getShootingStatus() {
    if (!this.turnedOn) {
      console.log('The device is currently turned off. Please turn on the device first');

      return 0;
    }
    console.log(`The robot soldier is ${this.shootStatus}`);

    return 0;
  }

  scanMap() {
    if (!this.turnedOn) {
      console.log('The device is currently turned off. Please turn on the device first');

      return 0;
    }
    this.mapStatus = 'scanned';
    console.log('The map has been scanned');

    return 0;
  }
}

RobotSoldier.prototype = { ...device.prototype };

module.exports = RobotSoldier;
