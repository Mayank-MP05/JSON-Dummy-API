const chance = require("chance").Chance();

module.exports = {
  //Dummy Text Content
  PARAGRAPH: () => chance.paragraph(),
  NAME: () => chance.name(),
  SENTENSE: () => chance.sentence(),
  ADDRESS: () => chance.address(),
  COUNTRY: () => chance.country(),

  //Dummy User Data
  EMAIL: () => chance.email(),
  USERNAME: () => chance.twitter(),
  COMPANY: () => chance.company(),
  DOMAIN: () => chance.domain(),
  PHONE: () => chance.phone(),

  //Date related data
  DATE: () => chance.date(),
  TIMESTAMP: () => chance.timestamp(),

  //Integer and Floating Data
  NUMBER: () => chance.integer(),
  FLOAT: Math.random(),

  //Boolean Data
  BOOL: () => chance.bool(),

  //Others
  NULL: () => null(),
};
