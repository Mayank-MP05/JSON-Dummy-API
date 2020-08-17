const { app } = require("../index.js");
const {
  PARAGRAPH,
  DATE,
  FLOAT,
  NUMBER,
  BOOL,
  ARRAY,
  OBJECT,
} = require("../randomizer");
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
