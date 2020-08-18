const { app } = require("../index");
const { ARRAY, OBJECT, NAME, BOOL } = require("../randomizer");

app.startDummyServer([
  {
    routeName: "/arrayOfObjects",
    response: ARRAY({
      type: OBJECT({
        name: NAME,
        arr: ARRAY({
          type: BOOL,
          limit: 2,
        }),
      }),
      limit: 5,
    }),
  },
]);
