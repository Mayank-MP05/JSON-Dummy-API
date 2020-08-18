const productDB = require("../databases/Products.database.json");

module.exports = (app) => {
  app.get("/products", (req, res) => {
    res.send(productDB);
  });

  app.get("/products/:id", (req, res) => {
    const id = parseInt(req.params.id);
    if (id > 0 && id < 51) {
      const requiredProduct = productDB.filter(
        (singleProduct) => singleProduct.ProductID === id
      );
      //console.log(requiredQuestion);
      res.send(requiredProduct);
    } else {
      res.send({
        msg: "Product Index Out of Range",
      });
    }
  });
};
