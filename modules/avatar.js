const axios = require("axios");

function randomNum() {
  return Math.floor(Math.random() * (75 - 1 + 1) + 1);
}

const Avatar = () => {
  const address = `https://randomuser.me/api/portraits/${
    randomNum() % 2 === 0 ? "men" : "women"
  }/${randomNum()}.jpg`;
  return address;
};

module.exports = Avatar();
