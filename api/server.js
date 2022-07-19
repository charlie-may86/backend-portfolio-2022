const express = require("express");
const server = express();
server.use(express.json());

const cfbRouter = require("./sports/cfb-router");

server.use("/api/cfb", cfbRouter);


server.use("*", (req, res, next) => {
  console.log(`hitting ${req.method} and ${req.baseUrl}`);
  res
    .status(401)
    .send({
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
