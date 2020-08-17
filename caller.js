let { arr ,app} = require("./index");

const PORT = 8100 || process.env.PORT;

arr.push("cate");
arr.push("cate45");
arr.push("cate95c");

// app.listen(PORT, () => {
//   console.log(`App is running on ${PORT}...`);
// });

app.startDummyServer()