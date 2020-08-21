let qandaDB = require("../databases/QandA.database.json");
module.exports = (app) => {
  //Question and Answer Setup
  app.get("/qanda", (req, res) => {
    res.json(qandaDB);
  });
  //Getting Single Q and A
  app.get("/qanda/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const requiredQuestion = qandaDB.filter(
      (singleQuestion) => singleQuestion.QuestionID === id
    );
    //console.log(requiredQuestion);
    res.json(requiredQuestion);
  });

  //Update Single Q and A
  app.put("/qanda/:id", (req, res) => {
    const id = parseInt(req.params.id);

    let obj = req.body;
    let updateIndex = qandaDB.findIndex((singleQuestion) => {
      return singleQuestion.QuestionID === id;
    });
    if (updateIndex !== -1) {
      qandaDB[updateIndex] = {
        QuestionID: id,
        ...obj,
      };

      //console.log(requiredQuestion);
      res.json({
        QuestionID: id,
        ...obj,
      });
    } else {
      res.status(404).json({
        err: `No Question with ID : ${id}`,
      });
    }
  });

  //Post to  Q and A | adding new Q and A
  app.post("/qanda", (req, res) => {
    const length = qandaDB.length;
    const id = qandaDB[length - 1].QuestionID
      ? qandaDB[length - 1].QuestionID + 1
      : 1;
    let obj = req.body;
    qandaDB.push({
      QuestionID: id,
      ...obj,
    });
    //console.log(requiredQuestion);
    res.json({
      QuestionID: id,
      ...obj,
    });
  });

  //Deleting product by ID
  app.delete("/qanda/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const deleted = qandaDB.filter(
      (singleQuestion) => singleQuestion.QuestionID === id
    );
    qandaDB = qandaDB.filter(
      (singleQuestion) => singleQuestion.QuestionID !== id
    );
    res.json(deleted);
  });
};
