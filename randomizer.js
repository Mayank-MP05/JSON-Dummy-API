const chance = require("chance").Chance();

module.exports = {
  //Dummy Text Content
  PARAGRAPH: () => chance.paragraph(),
  NAME: () => chance.name(),
  SENTENSE: () => chance.sentence(),
  ADDRESS: () => chance.address(),
  COUNTRY: () => chance.country({ full: true }),

  
  //Dummy User Data
  EMAIL: () => chance.email(),
  USERNAME: () => chance.twitter(),
  COMPANY: () => chance.company(),
  DOMAIN: () => chance.domain(),
  PHONE: () => chance.phone(),
};
