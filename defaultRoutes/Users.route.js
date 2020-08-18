const usersDB = require("../databases/Users.database.json");

module.exports = (app) => {
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
};
