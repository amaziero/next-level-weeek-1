const express = require("express");
const server = express();
const nunjucks = require("nunjucks");

const db = require("./database/db");

server.use("/public", express.static("public"));
server.use("/scripts", express.static("scripts"));

nunjucks.configure("pages", {
  express: server,
  noCache: true,
});

server.get("/", (request, response) => {
  return response.render("index.html");
});

server.get("/create-point", (request, response) => {
  return response.render("create-point.html");
});

server.get("/search-results", (request, response) => {
  response.render("search-results.html");
});

server.listen(3000);
