const express = require("express");
const helmet = require("helmet");
const db = require("../data/connection");
const fruitsRouter = require("../fruits/fruits-router.js");

const server = express();

server.use(helmet());
server.use(express.json());

server.use("/api/fruits", fruitsRouter);

server.get("/api/veggies", (req, res) => {
  db("veggies")
    .then((veggies) => {
      res.status(200).json({ data: veggies });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: err });
    });
});

module.exports = server;
