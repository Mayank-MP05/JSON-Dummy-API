const { app, startDummyServer } = require("./index.js");
const { PARAGRAPH, DATE } = require("./randomizer");
const routes = [
  {
    routeName: "/hello",
    response: {
      para: PARAGRAPH,
      birthDay: DATE,
    },
  },
];
app.startDummyServer(routes);
