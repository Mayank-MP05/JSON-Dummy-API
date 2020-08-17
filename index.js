const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const chance = require("chance").Chance();
let { paragraph } = require("./dummyData/TextContent");
const PORT = 8100 || process.env.PORT;

const app = express();
app.use(cors());
app.use(bodyparser.json());
app.get("/", (req, res) => {
  res.send("Hello from Dummy Server...");
});
app.get("/hi", (req, res) => {
  res.send(paragraph());
});

let arr = ["users", "posts", "products", "prod/46"];
arr.map((el) => {
  app.get(`/${el}`, (req, res) => {
    res.json({
      cat: el,
    });
  });
});

app.get("/api/:route", (req, res) => {
  if (req.params.route === "users") {
    res.json({
      msg: "This is user route",
    });
  }
  res.json({
    err: "Route Not Found",
  }).status(404);
});
module.exports = {
  app,
  PORT,
  chance,
  arr,
};
