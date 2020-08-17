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
    routeName: "/arrAndObj",
    response: {
      para: PARAGRAPH,
        
    },
  },
];
app.startDummyServer(routes);
