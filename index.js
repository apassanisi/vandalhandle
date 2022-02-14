const Name = require("./modules/name.js");
const Address = require("./modules/address.js");
const Avatar = require("./modules/avatar.js");

module.exports = {
  firstName: Name.first,
  lastName: Name.last,
  fullName: Name.fullName,
  streetAddress: Address.streetAddress,
  city: Address.city,
  state: Address.state,
  zip: Address.zip,
  fullAddress: Address.fullAddress,
  avatar: Avatar
};
