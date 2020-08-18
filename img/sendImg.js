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

app.startDummyServer();
