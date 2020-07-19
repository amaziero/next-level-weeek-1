const express = require("express");
const server = express();
const nunjucks = require("nunjucks");

const db = require("./database/db");

server.use("/public", express.static("public"));
server.use("/scripts", express.static("scripts"));

server.use(express.urlencoded({ extended: true }));

nunjucks.configure("pages", {
  express: server,
  noCache: true,
});

server.get("/", (request, response) => {
  return response.render("index.html");
});

server.get("/create-point", (request, response) => {
  // request.query();
  return response.render("create-point.html");
});

server.post("/savepoint", (request, response) => {
  const insertQuery = `INSERT INTO places ( name, image, adress, adress2, state, city, item )
      VALUES (?, ?, ?, ?, ?, ?, ?);`;
  const values = [
    request.body.name,
    request.body.image,
    request.body.adress,
    request.body.adress2,
    request.body.state,
    request.body.city,
    request.body.item,
  ];

  function afterInsertData(err) {
    if (err) {
      console.error(err);
      return response.send("Erro no cadastro!");
    }
    console.log("Salvo com Sucesso");

    return response.render("create-point.html", { saved: true });
  }

  db.run(insertQuery, values, afterInsertData);
});

server.get("/search-results", (request, response) => {
  const search = request.query.search;

  if (search == "") {
    return response.render("search-results.html", { total: 0 });
  }

  db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, function (
    error,
    rows
  ) {
    if (error) {
      return console.error(error);
    }

    const total = rows.length;
    return response.render("search-results.html", { places: rows, total });
  });
});

server.listen(3000);
