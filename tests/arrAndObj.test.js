const { app } = require("../index.js");
const {
  PARAGRAPH,
  DATE,
  FLOAT,
  NUMBER,
  BOOL,
  ARRAY,
  OBJECT,
  NAME,
  SENTENSE,
} = require("../randomizer");
const routes = [
  {
    routeName: "/arrAndObj",
    response: {
      //para: PARAGRAPH,
      user: OBJECT({
        name: NAME,
        AGE: OBJECT({
          no: NUMBER,
          old: BOOL,
        }),
        hobby: ARRAY({
          type: OBJECT({
            post: NUMBER,
            bd: DATE,
          }),
          limit: 4,
        }),
      }),
    },
  },
];
app.startDummyServer(routes);
