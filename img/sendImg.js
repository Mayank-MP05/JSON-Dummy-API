const { app } = require("../index");

app.get("/getImg", (req, res) => {
  res.sendFile(`${__dirname}/dummy.png`, {}, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Sent");
    }
  });
});

app.get("/getImg/:side", (req, res) => {
  res.sendFile(`${__dirname}/dummy.png`, {}, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Sent");
    }
  });
  console.log(req.params);
});

app.get("/getImg/:width/:height", (req, res) => {
  res.sendFile(`${__dirname}/dummy.png`, {}, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Sent");
    }
  });
  console.log(req.params);
});
app.startDummyServer();
