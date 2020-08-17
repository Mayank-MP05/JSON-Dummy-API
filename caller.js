const { app, startDummyServer } = require("./index.js");
const { PARAGRAPH } = require("./randomizer");
const routes = [
  {
    routeName: "/hello",
    response: {
      para: PARAGRAPH(),
    },
  },
];
app.startDummyServer(routes);
