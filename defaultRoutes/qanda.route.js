const {
  SENTENSE,
  PARAGRAPH,
  FLOAT,
  NUMBER,
  AUTOINCREMENT,
} = require("../randomizer");

const qandaRoute = [
  {
    routeName: "/qanda",
    response: {
      QuestionID: AUTOINCREMENT(0),
      question: SENTENSE,
      answer: PARAGRAPH,
    },
  },
];

module.exports = qandaRoute;
