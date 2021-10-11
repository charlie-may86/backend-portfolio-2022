require("dotenv").config();

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const server = express();
server.use(express.json());
server.use(cors());
server.use(helmet());

const { PORT } = require("./config");

server.get("/", (req, res) => {
  res.json(`
    <h1>This is the scaffold<h1>
    `);
});

server.use("*", (req, res, next) => {
  res.json({ message: "This is the scafold" });
});

server.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
