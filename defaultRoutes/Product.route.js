let productDB = require("../databases/Products.database.json");

module.exports = (app) => {
  //Get all Products
  app.get("/products", (req, res) => {
    res.json(productDB);
  });

  //Get single product
  app.get("/products/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const requiredProduct = productDB.filter(
      (singleProduct) => singleProduct.ProductID === id
    );
    //console.log(requiredQuestion);
    res.json(requiredProduct);
  });

  //Update Single Product
  app.put("/products/:id", (req, res) => {
    const id = parseInt(req.params.id);

    let obj = req.body;
    let updateIndex = productDB.findIndex((singleProduct) => {
      return singleProduct.ProductID === id;
    });
    if (updateIndex !== -1) {
      productDB[updateIndex] = {
        ProductID: id,
        ...obj,
      };

      //console.log(requiredQuestion);
      res.json({
        ProductID: id,
        ...obj,
      });
    } else {
      res.status(404).json({
        err: `No Product with ID : ${id}`,
      });
    }
  });

  //Post to Products | adding new Products
  app.post("/products", (req, res) => {
    const length = productDB.length;
    const id = productDB[length - 1].ProductID
      ? productDB[length - 1].ProductID + 1
      : 1;
    let obj = req.body;
    productDB.push({
      ProductID: id,
      ...obj,
    });
    //console.log(requiredQuestion);
    res.json({
      ProductID: id,
      ...obj,
    });
  });

  //Deleting product by ID
  app.delete("/products/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const deleted = productDB.filter(
      (singleProduct) => singleProduct.ProductID === id
    );
    productDB = productDB.filter(
      (singleProduct) => singleProduct.ProductID !== id
    );
    res.json(deleted);
  });
};
