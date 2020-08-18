const qandaRoute = require("./QandA.route");
const usersRoute = require("./Users.route");
const productsRoute = require("./Product.route");
module.exports = (app) => {
  qandaRoute(app);
  usersRoute(app);
  productsRoute(app);
};
