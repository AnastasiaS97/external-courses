const VacuumCleaner = require('./vacuum-cleaner.js');
const RobotCleaner = require('./robot-cleaner.js');
const RobotSoldier = require('./robot-soldier.js');

const newVacuumCleaner = new VacuumCleaner({
  power: '450W',
  turnedOn: false,
  mode: 'wet',
});

const newRobotCleaner = new RobotCleaner({
  power: '70W',
  turnedOn: false,
  mode: 'dry',
  mapStatus: 'hasn\'t been scanned',
});

const newRobotSoldier = new RobotSoldier({
  power: '5000W',
  turnedOn: false,
  mapStatus: 'hasn\'t been scanned',
  shootStatus: 'not shooting',
});

newVacuumCleaner.turnOn();
newRobotCleaner.turnOn();
newRobotSoldier.turnOn();
