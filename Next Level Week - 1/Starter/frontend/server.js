const express = require("express");
const server = express();
const path = require("path");

server.use(express.static("./public"));

server.get("/", (request, response) => {
  response.sendFile(__dirname + "/pages/home/index.html");
});
server.listen(3000);
