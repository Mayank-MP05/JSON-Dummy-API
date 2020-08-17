const { app } = require("../index.js");
const {
  PARAGRAPH,
  DATE,
  FLOAT,
  NUMBER,
  BOOL,
  ARRAY,
} = require("../randomizer");
const routes = [
  {
    routeName: "/array",
    response: {
      para: PARAGRAPH,
      //   birthDay: {
      //     date: DATE,
      //     adult: BOOL,
      //   },
      arr: ARRAY({
        type: BOOL,
        limit: 30,
      }),
      flaotier: FLOAT,
      Munoneor: NUMBER,
      bolle: BOOL,
    },
  },
];
app.startDummyServer(routes);
