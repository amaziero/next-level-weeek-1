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
  db.all(`SELECT * FROM places`, function (error, rows) {
    if (error) {
      return console.error(error);
    }

    return response.render("search-results.html", { places: rows });
  });
});

server.listen(3000);
