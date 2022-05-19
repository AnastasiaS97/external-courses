const device = require('./device.js');

class VacuumCleaner {
  constructor(model) {
    device.call(this, model);

    this.mode = model.mode;
  }

  changeMode() {
    if (!this.turnedOn) {
      console.log('The device is currently turned off. Please turn on the device first');

      return 0;
    }
    if (this.mode === 'wet') {
      this.mode = 'dry';
      console.log('The device is now switched to dry cleaning mode');

      return 0;
    }
    this.cleaningMode = 'wet';
    console.log('The device is now switched to wet cleaning mode');

    return 0;
  }

  showInfo() {
    console.log(`Power: ${this.power}, mode: ${this.mode}`);
  }
}

VacuumCleaner.prototype = { ...device.prototype };

module.exports = VacuumCleaner;
