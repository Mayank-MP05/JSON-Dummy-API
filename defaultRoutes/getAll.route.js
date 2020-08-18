const { app } = require("../index");
const productDB = require("./../databases/Products.database.json");
const qandaDB = require("./../databases/QandA.database.json");
const usersDB = require("./../databases/Users.database.json");
//Question and Answer Setup
app.get("/qanda", (req, res) => {
  res.send(qandaDB);
});
app.get("/qanda/:id", (req, res) => {
  const id = parseInt(req.params.id);
  if (id > 0 && id < 51) {
    const requiredQuestion = qandaDB.filter(
      (singleQuestion) => singleQuestion.QuestionID === id
    );
    //console.log(requiredQuestion);
    res.send(requiredQuestion);
  } else {
    res.send({
      msg: "Question Index Out of Range",
    });
  }
});

app.get("/users", (req, res) => {
  res.send(usersDB);
});

app.get("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  if (id > 0 && id < 51) {
    const requiredUser = usersDB.filter(
      (singleUser) => singleUser.UserID === id
    );
    //console.log(requiredQuestion);
    res.send(requiredUser);
  } else {
    res.send({
      msg: "Student Index Out of Range",
    });
  }
});

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
app.startDummyServer();
