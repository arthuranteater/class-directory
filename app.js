const express = require("express");
const app = express();
const parser = require("body-parser");
const cors = require("cors");
const port = process.env.PORT || 3000;
const queries = require("./queries.js");

app.use(parser.json());
app.use(cors());

// app.get("/", (req, res) => {
//   res.send("😎");
// });

app.get("/", (req, res) => {
  queries.listAll().then(data => res.json({ data }));
});

app.get("/:id", (req, res) => {
  queries.getById(req.params.id).then(data => res.json({ data }));
});

app.post("/", (req, res) => {
  queries.createMate(req.body).then(data => res.json({ data }));
});

app.put("/:id", (req, res) => {
  queries.updateMate(req.params.id, req.body).then(data => res.json({ data }));
});

app.delete("/:id", (req, res) => {
  queries.deleteMate(req.params.id).then(data => res.json({ data }));
});

app.listen(port, () => {
  console.log("it works");
});
