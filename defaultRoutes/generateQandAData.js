const fs = require("fs");
const chance = require("chance").Chance();

const arr = [];
for (i = 0; i < 50; i++) {
  // jsonFile.writeFile('QandA.database.json', "id :" + i + " square :" + i * i);
  const obj = {
    QuestionID: i + 1,
    question: `${chance.sentence()} ?`,
    answer: chance.paragraph(),
    upvotes: Math.ceil(Math.random() * 101),
    downvotes: Math.ceil(Math.random() * 101),
  };
  arr.push(obj);
}

fs.writeFile("QandA.database.json", JSON.stringify(arr), "utf8", () => {
  console.log("JSON Writing Done");
});
