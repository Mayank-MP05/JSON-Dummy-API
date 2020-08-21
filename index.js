const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const defaultRoutes = require("./defaultRoutes");
const PORT = process.env.PORT || 1234;
const app = express();
app.use(bodyparser.json());
app.use(express.json());
app.use(cors());

// All the default routes : QandA , Users ,Products
defaultRoutes(app);

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
    configObjectArray.map((configRoute) => {
      if (configRoute.reqType === "GET") {
        app.get(configRoute.routeName, (req, res) => {
          if (Array.isArray(configRoute.response())) {
            arr = Object.entries(configRoute.response);
            res.send(configRoute.response());
          } else {
            arr = configRoute.response();
            res.send(arr);
          }
        });
      } else if (configRoute.reqType === "POST") {
        app.post(configRoute.routeName, (req, res) => {
          console.log(req.body);

          if (Array.isArray(configRoute.response())) {
            arr = Object.entries(configRoute.response);
            res.send(configRoute.response());
          } else {
            arr = configRoute.response();
            res.send(arr);
          }
          console.log(`POST req on ${configRoute.routeName}`);
        });
      } else if (configRoute.reqType === "PUT") {
        app.put(configRoute.routeName, (req, res) => {
          console.log(req.body);
          if (Array.isArray(configRoute.response())) {
            arr = Object.entries(configRoute.response);
            res.send(configRoute.response());
          } else {
            arr = configRoute.response();
            res.send(arr);
          }
          console.log(`PUT req on ${configRoute.routeName}`);
        });
      } else if (configRoute.reqType === "DELETE") {
        app.delete(configRoute.routeName, (req, res) => {
          if (Array.isArray(configRoute.response())) {
            arr = Object.entries(configRoute.response);
            res.send(configRoute.response());
          } else {
            arr = configRoute.response();
            res.send(arr);
          }
          console.log(`DELETE req on ${configRoute.routeName}`);
        });
      } else {
        app.get(configRoute.routeName, (req, res) => {
          if (Array.isArray(configRoute.response())) {
            arr = Object.entries(configRoute.response);
            res.send(configRoute.response());
          } else {
            arr = configRoute.response();
            res.send(arr);
          }
        });
      }
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
