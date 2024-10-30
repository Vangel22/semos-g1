const express = require("express");
const app = express();

app.get("/", (req, res) => {
  return res.send("Hello World");
});

app.listen(10000, () => {
  console.log("Server started at port 10000");
});
