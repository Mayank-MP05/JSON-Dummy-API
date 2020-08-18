const fs = require("fs");
const chance = require("chance").Chance();

const arr = [];
for (i = 0; i < 50; i++) {
  // jsonFile.writeFile('QandA.database.json', "id :" + i + " square :" + i * i);
  const obj = {
    UserID: i + 1,
    name: chance.name(),
    username: chance.twitter(),
    bio: chance.sentence(),
    age: Math.ceil(Math.random() * 80),
  };
  arr.push(obj);
}

fs.writeFile("Users.database.json", JSON.stringify(arr), "utf8", () => {
  console.log("JSON Writing Done");
});
