const chance = require("chance").Chance();

module.exports = {
  //Dummy Text Content
  PARAGRAPH: () => chance.paragraph(),
  NAME: () => chance.name(),
  SENTENSE: () => chance.sentence(),
  ADDRESS: () => chance.address(),
  COUNTRY: () => chance.country({ full: true }),

};
