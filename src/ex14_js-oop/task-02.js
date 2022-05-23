class Device {
  constructor(power = 0, name = '') {
    this.name = name;
    this.power = power;
    this.turnedOn = false;
  }

  turnOn() {
    if (this.turnedOn) {
      console.log('Already on');

      return 0;
    }
    this.turnedOn = true;
    console.log('The device is now turned on');

    return 0;
  }

  turnOff() {
    if (!this.turnedOn) {
      console.log('Already off');

      return 0;
    }
    this.turnedOn = false;
    console.log('The device is now turned off');

    return 0;
  }

  getName() {
    return this.name;
  }

  getPower() {
    return this.power;
  }
}

class TV extends Device {
  constructor(power = 0, name = '', channel = 1) {
    super(power, name);
    this.channel = channel;
  }

  changeChannel(newChannel) {
    if (!this.turnedOn) {
      console.log('The device is currently turned off. Please turn on the device first');

      return 0;
    }
    this.channel = newChannel;
    console.log(`Changed the channel to ${newChannel}`);

    return 0;
  }
}

class Microwave extends Device {
  constructor(power = 0, name = '', timer = 0) {
    super(power, name);
    this.timer = timer;
  }

  setTimer(time) {
    if (!this.turnedOn) {
      console.log('The device is currently turned off. Please turn on the device first');

      return 0;
    }
    this.timer = time;
    console.log(`Set the timer to ${time}`);

    return 0;
  }
}

class Oven extends Microwave {
  constructor(power = 0, name = '', timer = 0, temperature = 0) {
    super(power, name, timer);
    this.temperature = temperature;
  }

  setTemperature(newTemp) {
    if (!this.turnedOn) {
      console.log('The device is currently turned off. Please turn on the device first');

      return 0;
    }
    this.temperature = newTemp;
    console.log(`Set the timer to ${newTemp}`);

    return 0;
  }
}

class Room {
  constructor(devices = [], roomName) {
    this.devices = devices;
    this.roomName = roomName;
  }

  getRoomPower() {
    const devicesOn = this.devices.filter((device) => device.turnedOn);
    if (devicesOn.length === 0) {
      console.log('There aren\'t any devices on in this room');

      return 0;
    }
    const powerEach = [];
    devicesOn.forEach((device) => powerEach.push(device.power));
    const powerTotal = powerEach.reduce((a, b) => a + b, 0);
    console.log(`Total power is ${powerTotal}`);

    return 0;
  }

  findDevice(deviceName) {
    return this.devices.forEach((device) => {
      if (device.getName().toLowerCase() === deviceName.toLowerCase()) {
        console.log(`${deviceName} in ${this.roomName}`);
      }
    });
  }
}

const LGTV = new TV(2000, 'LG TV', 5);
const SamsungMicrowave = new Microwave(1200, 'Samsung microwave', 60);
const BoschOven = new Oven(500, 'Bosch oven', 120, 400);
const Kitchen = new Room([LGTV, SamsungMicrowave, BoschOven], 'kitchen');

const SamsungTV = new TV(2600, 'Samsung TV', 3);
const Bedroom = new Room([SamsungTV], 'bedroom');

LGTV.turnOn();
BoschOven.turnOn();
Kitchen.getRoomPower();
Kitchen.findDevice('LG TV');
SamsungTV.turnOn();
Bedroom.findDevice('Samsung TV');
