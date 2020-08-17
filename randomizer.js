const chance = require("chance").Chance();

// Second Order funnciton to define config object in
// first order and funciton call in second order
const ArrFunction = ({ type, limit }) => () => {
  let arr = [];
  for (let i = 0; i < limit; i++) {
    arr.push(type());
  }
  return arr;
};

const Objectfunction = (ObjContent) => () => {
  let obj = {};
  const arr = Object.entries(ObjContent);
  //console.log(Object.entries(configRoute.response));
  arr.map((entry) => {
    //console.log(entry);
    const keyName = entry[0];
    const valueFunction = entry[1];
    obj[keyName] = valueFunction();
  });
  return obj;
};

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
  FLOAT: () => Math.random(),

  //Boolean Data
  BOOL: () => chance.bool(),

  //Others
  NULL: () => null(),

  //Array
  ARRAY: ArrFunction,

  //Object
  OBJECT: Objectfunction,
};
