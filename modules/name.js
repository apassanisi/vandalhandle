const firstNames = require('../data/firstNames.json');
const lastnameFirsthalf = require('../data/lastnameFirstHalf.json');
const lastnameSecondhalf = require('../data/lastnameSecondhalf.json');
const lastnamePreset = require('../data/lastnamePreset.json');
const lastnamePrefix = require('../data/lastnamePrefix.json');

const buildFirstname = () => {
  return firstNames[Math.floor(Math.random() * firstNames.length)];
};

const buildLastname = () => {
  let builtLastname = '';

  if (Math.random() >= 0.7) {
    builtLastname += lastnamePrefix[Math.floor(Math.random() * lastnamePrefix.length)]
  }

  if (Math.random() >= 0.15) {
    builtLastname +=
      lastnameFirsthalf[Math.floor(Math.random() * lastnameFirsthalf.length)] +
      lastnameSecondhalf[Math.floor(Math.random() * lastnameSecondhalf.length)];
  } else {
    builtLastname = lastnamePreset[Math.floor(Math.random() * lastnamePreset.length)]
  }

  return builtLastname;
};

module.exports = {
  last: buildLastname(),
  first: buildFirstname(),
  fullName: buildFirstname() + ' ' + buildLastname()
};
