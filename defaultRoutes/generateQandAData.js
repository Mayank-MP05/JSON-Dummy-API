const fs = require("fs");
for (i = 0; i < 11; i++) {
  // jsonFile.writeFile('QandA.database.json', "id :" + i + " square :" + i * i);
  fs.writeFile(
    "QandA.database.json",
    JSON.stringify({ msg: "This si First JSON Wirte" }),
    "utf8",
    () => {
      console.log("JSON Writing Done");
    }
  );
}
