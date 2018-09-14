const express = require("express");
const app = express();
const parser = require("body-parser");
const cors = require("cors");
const port = process.env.PORT || 3000;
const queries = require("./queries.js");

app.use(parser.json());
app.use(cors());

app.get("/", (req, res) => {
  queries.listAll().then(data => res.json({ data }));
  res.send("😎");
});

app.listen(port, () => {
  console.log("it works");
});
