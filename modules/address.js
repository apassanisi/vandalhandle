const importantNumber = require("../data/importantNumbers.json");
const streetNames = require("../data/streetNames.json");
const roadNames = require("../data/roadNames.json");
const cityNames = require("../data/cityNames.json");
const states = require("../data/states.json");

const randomImportantNumber = () => {
  return importantNumber[Math.floor(Math.random() * importantNumber.length)];
};

const randomStreetName = () => {
  return streetNames[Math.floor(Math.random() * streetNames.length)];
};

const randomRoadName = () => {
  return roadNames[Math.floor(Math.random() * roadNames.length)];
};

const buildStreetAddress = () => {
  return (
    randomImportantNumber() + " " + randomStreetName() + " " + randomRoadName()
  );
};

const randomCityName = () => {
  return cityNames[Math.floor(Math.random() * cityNames.length)];
};

const randomState = () => {
  var keys = Object.keys(states);
  return states[keys[(keys.length * Math.random()) << 0]];
};

const randomZipcode = () => {
  return Math.floor(Math.random() * 90000) + 10000;
};

const fullAddress = () => {
  const fullAddress = `${buildStreetAddress()}
${randomCityName()}, ${randomState()}
${randomZipcode()}`;
  return fullAddress;
}

module.exports = {
  streetAddress: buildStreetAddress(),
  city: randomCityName(),
  state: randomState(),
  zip: randomZipcode(),
  fullAddress: fullAddress()
};
