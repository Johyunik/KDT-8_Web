const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const PORT = 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/login", (req, res) => {
  const { id } = req.body;
  const token = jwt.sign({ id: id });
});
