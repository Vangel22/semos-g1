const express = require("express");
const app = express();
const cors = require("cors");

// data doagja od nasata MongoDB baza
const data = [
  {
    id: 1,
    name: "Ace",
  },
  {
    id: 2,
    name: "Riste",
  },
  {
    id: 3,
    name: "Ceca",
  },
];

app.use(cors());

app.get("/", (req, res) => {
  return res.send("Hello World");
});

app.get("/test", (req, res) => {
  // /test?name="Test"
  return res.send(
    `Hello ${req.query.name !== "" ? req.query.name : "John Doe"}`
  );
});

app.get("/data", (req, res) => {
  return res.send(data);
});

app.listen(10000, () => {
  console.log("Server started at port 10000");
});
