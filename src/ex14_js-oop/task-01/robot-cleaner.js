const VacuumCleaner = require('./vacuum-cleaner.js');

class RobotCleaner {
  constructor(model) {
    VacuumCleaner.call(this, model);
    this.mapStatus = model.mapStatus;
  }

  showInfo() {
    console.log(`Power: ${this.power}, mode: ${this.mode}, the map ${this.mapStatus}`);
  }

  scanMap() {
    if (!this.turnedOn) {
      console.log('The device is currently turned off. Please turn on the device first');

      return 0;
    }
    this.mapStatus = 'has been scanned';
    console.log('The map has been scanned');

    return 0;
  }
}

RobotCleaner.prototype = { ...VacuumCleaner.prototype };

module.exports = RobotCleaner;
