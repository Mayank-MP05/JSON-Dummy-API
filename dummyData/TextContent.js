const chance = require("chance").Chance();
const paragraph = chance.paragraph();
const sentence = chance.sentence();

module.exports = {
  paragraph:() => chance.paragraph(),
  sentence,
};
