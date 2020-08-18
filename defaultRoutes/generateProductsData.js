const fs = require("fs");
const chance = require("chance").Chance();

const arr = [];
for (i = 0; i < 50; i++) {
  // jsonFile.writeFile('QandA.database.json', "id :" + i + " square :" + i * i);
  const obj = {
    ProductID: i + 1,
    title: chance.name(),
    description: chance.paragraph(),
    price: Math.ceil(Math.random() * 1001),
    starRating: (Math.random() * 5).toFixed(1),
    inStock: chance.bool(),
  };
  arr.push(obj);
}

fs.writeFile("Products.database.json", JSON.stringify(arr), "utf8", () => {
  console.log("JSON Writing Done");
});
