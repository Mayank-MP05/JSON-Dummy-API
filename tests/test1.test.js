const { app } = require("../index.js");
const {
  PARAGRAPH,
  DATE,
  FLOAT,
  NUMBER,
  BOOL,
  IMGURL,
  OBJECT,
} = require("../randomizer");
const routes = [
  {
    routeName: "/hello",
    response: OBJECT({
      para: PARAGRAPH,
      birthDay: DATE,
      flaotier: FLOAT,
      Munoneor: NUMBER,
      bolle: BOOL,
      img: IMGURL(250, 459),
    }),
  },
];
app.startDummyServer(routes);
