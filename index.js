const express = require("express");
const cors = require("cors");
const PORT = 8100 || process.env.PORT;

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello from Dummy Server...");
});

app.listen(PORT, () => {
  console.log(`App is running on ${PORT}...`);
});
