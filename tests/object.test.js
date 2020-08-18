const { app } = require("../index.js");
const { DATE, BOOL, OBJECT } = require("../index");
const routes = [
  {
    routeName: "/object",
    response: {
      birthDay: OBJECT({
        date: DATE,
        adult: BOOL,
      }),
    },
  },
];
app.startDummyServer(routes);
