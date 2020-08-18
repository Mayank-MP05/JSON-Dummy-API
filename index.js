const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const PORT = process.env.PORT || 1234;
const app = express();

app.use(cors());
app.use(bodyparser.json());

//Home page View Routes
app.get("/", (req, res) => {
  res.redirect("/dashboard");
  //console.log("REdirectd : This is Dashboard Route");
});

//Visuals Routes to Homepage
app.get("/dashboard", (req, res) => {
  res.send("This is Dashboard Route");
});

//Function to Start the Server
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

//Dummy data from Randomiser
const {
  PARAGRAPH,
  NAME,
  SENTENSE,
  ADDRESS,
  COUNTRY,

  //Dummy User Data
  EMAIL,
  USERNAME,
  COMPANY,
  DOMAIN,
  PHONE,

  //Date related data
  DATE,
  TIMESTAMP,

  //Integer and Floating Data
  NUMBER,
  FLOAT,

  //Boolean Data
  BOOL,

  //Others
  NULL,
  //Array and Object
  ARRAY,
  OBJECT,
} = require("./randomizer");
module.exports = {
  app,
  PORT,
  //Dummy Text Content
  PARAGRAPH,
  NAME,
  SENTENSE,
  ADDRESS,
  COUNTRY,

  //Dummy User Data
  EMAIL,
  USERNAME,
  COMPANY,
  DOMAIN,
  PHONE,

  //Date related data
  DATE,
  TIMESTAMP,

  //Integer and Floating Data
  NUMBER,
  FLOAT,

  //Boolean Data
  BOOL,

  //Others
  NULL,
  ARRAY,
  OBJECT,
};
