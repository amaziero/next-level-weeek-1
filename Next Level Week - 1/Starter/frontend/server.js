const express = require("express");
const server = express();
const path = require("path");

server.use("/public", express.static("public"));

server.get("/", (request, response) => {
  response.sendFile(__dirname + "/pages/index.html");
});

server.get("/create-point", (request, response) => {
  response.sendFile(__dirname + "/pages/create-point.html");
});

server.listen(3000);
