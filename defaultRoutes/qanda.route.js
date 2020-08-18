const { SENTENSE, PARAGRAPH, FLOAT, NUMBER } = require("../randomizer");

const qandaRoute = [
  {
    routeName: "/qanda",
    response: {
      QuestionID: NUMBER,
      question: SENTENSE,
      answer: PARAGRAPH,
    },
  },
];

module.exports = qandaRoute;
