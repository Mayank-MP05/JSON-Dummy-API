const { app, startDummyServer } = require("./index.js");
const { PARAGRAPH, DATE, FLOAT, NUMBER, BOOL } = require("./randomizer");
const routes = [
  {
    routeName: "/hello",
    response: {
      para: PARAGRAPH,
      birthDay: DATE,
      flaotier: FLOAT,
      Munoneor: NUMBER,
      bolle: BOOL,
    },
  },
];
app.startDummyServer(routes);
