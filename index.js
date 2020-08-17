const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const PORT = 8100 || process.env.PORT;
const app = express();

app.use(cors());
app.use(bodyparser.json());

app.get("/", (req, res) => {
  res.redirect("/dashboard");
  //console.log("REdirectd : This is Dashboard Route");
});

app.get("/dashboard", (req, res) => {
  res.send("This is Dashboard Route");
});

app.get("/api/:route", (req, res) => {
  if (req.params.route === "users") {
    res.json({
      msg: app,
    });
  }
  res
    .json({
      err: "Route Not Found",
    })
    .status(404);
});

app.listen(PORT, () => {
  console.log("Server Strter");
});

app.startDummyServer = () => {
  app.listen(PORT, () => {
    console.log("SERVER by pROto");
  });
};
module.exports = {
  app,
  PORT,
};
