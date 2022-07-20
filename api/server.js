const express = require("express");
const server = express();
const cors = require("cors");

server.use(express.json());
server.use(cors());

const cfbRouter = require("./sports/cfb-router");
const userRouter = require("./users/users-router");
const authRouter = require("./auth/auth-router");

server.use("/api/cfb", cfbRouter);
server.use("/api/users", userRouter);
server.use("/api/auth", authRouter);

server.use("*", (req, res, next) => {
  console.log(`hitting ${req.method} and ${req.baseUrl}`);
  res.status(401).send({
    message: `Hey. You are hitting my sports app. But probably not the rigth way.`,
  });
});

server.use("/", (req, res, next) => {
  res.send("<h1>Hey There good Looking<h1>");
});

server.use((err, req, res) => {
  //error handling middleware
  // shoots back a response to the client if anything goes wrong in any of the middlewares that preceed this one
  res.status(err.status || 500).json({ message: `Horror: ${err.message}` });
});

module.exports = server;
