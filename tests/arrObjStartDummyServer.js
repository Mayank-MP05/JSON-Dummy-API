onst { app, PORT } = require("../index");
const { OBJECT, NAME, NUMBER, ARRAY, BOOL, DATE } = require("../randomizer");

app.startDummyServer = (configObjectArray) => {
  if (configObjectArray) {
    //console.log(configObjectArray);
    configObjectArray.map((configRoute) => {
      app.get(configRoute.routeName, (req, res) => {
        if (Array.isArray(configRoute.response())) {
          arr = Object.entries(configRoute.response);
          //console.log("Array passed");
          res.send(configRoute.response());
        } else {
          arr = configRoute.response();
          //console.log("object passed");
          res.send(arr);
        }
      });
    });
  }
  app.listen(PORT, () => {
    console.log(`SERVER is running on http://localhost:${PORT}/`);
  });
};

app.startDummyServer([
  {
    routeName: "/objectParent",
    response: OBJECT({
      name: NAME,
      age: NUMBER,
    }),
  },
  {
    routeName: "/arrayParent",
    response: ARRAY({
      type: BOOL,
      limit: 4,
    }),
  },
  {
    routeName: "/char",
    response: DATE,
  },
]);
