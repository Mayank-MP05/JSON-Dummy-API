const { app } = require("../index.js");

const qandaRoute = require("./../defaultRoutes/qanda.route");

app.startDummyServer(qandaRoute);
