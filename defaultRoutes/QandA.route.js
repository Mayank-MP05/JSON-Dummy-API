const qandaDB = require("../databases/QandA.database.json");
module.exports = (app) => {
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
};
