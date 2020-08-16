const express = require("express");
const cors = require("cors");

var chance = require('chance').Chance();
const PORT = 8100 || process.env.PORT;

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello from Dummy Server...");
});

app.listen(PORT, () => {
  console.log(`App is running on ${PORT}...`);
});
