let usersDB = require("../databases/Users.database.json");

module.exports = (app) => {
  app.get("/users", (req, res) => {
    res.send(usersDB);
  });

  app.get("/users/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const requiredUser = usersDB.filter(
      (singleUser) => singleUser.UserID === id
    );
    //console.log(requiredQuestion);
    res.send(requiredUser);
  });

  //Update Single User
  app.put("/users/:id", (req, res) => {
    const id = parseInt(req.params.id);

    let obj = req.body;
    let updateIndex = usersDB.findIndex((singleUser) => {
      return singleUser.UserID === id;
    });
    if (updateIndex !== -1) {
      usersDB[updateIndex] = {
        UserID: id,
        ...obj,
      };

      //console.log(requiredQuestion);
      res.json({
        UserID: id,
        ...obj,
      });
    } else {
      res.status(404).json({
        err: `No User with ID : ${id}`,
      });
    }
  });

  //Post to  User | adding new User
  app.post("/users", (req, res) => {
    const length = usersDB.length;
    const id = usersDB[length - 1].UserID
      ? usersDB[length - 1].UserID + 1
      : 1;
    let obj = req.body;
    usersDB.push({
      UserID: id,
      ...obj,
    });
    //console.log(requiredQuestion);
    res.json({
      UserID: id,
      ...obj,
    });
  });

  //Deleting product by ID
  app.delete("/users/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const deleted = usersDB.filter(
      (singleUser) => singleUser.UserID === id
    );
    usersDB = usersDB.filter(
      (singleUser) => singleUser.UserID !== id
    );
    res.json(deleted);
  });
};
