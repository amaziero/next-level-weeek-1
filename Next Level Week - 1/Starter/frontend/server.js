const express = require("express");
const server = express();

server.use("/public", express.static("public"));
server.use("/scripts", express.static("scripts"));

server.get("/", (request, response) => {
  response.sendFile(__dirname + "/pages/index.html");
});

server.get("/create-point", (request, response) => {
  response.sendFile(__dirname + "/pages/create-point.html");
});

server.get("/search-results", (request, response) => {
  response.sendFile(__dirname + "/pages/search-results.html");
});

server.listen(3000);
