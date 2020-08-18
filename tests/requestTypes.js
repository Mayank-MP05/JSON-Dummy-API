const { app } = require("../index");
const { OBJECT, NAME } = require("../randomizer");
//Function to Start the Server

app.startDummyServer([
  {
    routeName: "/hello",
    response: OBJECT({
      name: NAME,
    }),
  },
  {
    reqType: "POST",
    routeName: "/hello",
    response: OBJECT({
      name: NAME,
    }),
  },
  {
    reqType: "DELETE",
    routeName: "/hellso",
    response: OBJECT({
      name: NAME,
    }),
  },
  {
    reqType: "PUT",
    routeName: "/hello",
    response: OBJECT({
      name: NAME,
    }),
  },
  {
    reqType: "POST",
    routeName: "/hello",
    response: OBJECT({
      name: NAME,
    }),
  },
]);
