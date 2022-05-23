const VacuumCleaner = require('./vacuum-cleaner.js');
const RobotCleaner = require('./robot-cleaner.js');
const RobotSoldier = require('./robot-soldier.js');

const NewVacuumCleaner = new VacuumCleaner({
  power: '450W',
  turnedOn: false,
  mode: 'wet',
});

const NewRobotCleaner = new RobotCleaner({
  power: '70W',
  turnedOn: false,
  mode: 'dry',
  mapStatus: 'hasn\'t been scanned',
});

const NewRobotSoldier = new RobotSoldier({
  power: '5000W',
  turnedOn: false,
  mapStatus: 'hasn\'t been scanned',
  shootStatus: 'not shooting',
});

NewVacuumCleaner.turnOn();
NewRobotCleaner.turnOn();
NewRobotSoldier.turnOn();
