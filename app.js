const express = require("express");
const app = express();
const parser = require("body-parser");
const cors = require("cors");
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("😎");
});

app.listen(port, () => {
  console.log("it works");
});
