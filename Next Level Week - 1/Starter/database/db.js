const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./database/database.db");

module.exports = db;

db.serialize(() => {
  // create;
  db.run(`
      CREATE TABLE IF NOT EXISTS places (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        image TEXT,
        adress TEXT,
        adress2 TEXT,
        state TEXT,
        city TEXT,
        item TEXT
      );
  `);

  // read;
  db.all(`SELECT * FROM places`, function (error, rows) {
    if (error) {
      return console.error(error);
    }
    console.log("Aqui estão seus registros");
    console.log(rows);
  });

  // push;
  const insertQuery = `INSERT INTO places ( name, image, adress, adress2, state, city, item )
      VALUES (?, ?, ?, ?, ?, ?, ?);`;
  const values = [
    "Papersider",
    "https://images.unsplash.com/photo-1503596476-1c12a8ba09a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80",
    "Guilherme Gebalha, Jardim América",
    "Número 3",
    "Santa Catarina",
    "Rio do Sul",
    "Papéis e Papelão",
  ];

  function afterInsertData(err) {
    if (err) {
      return console.error(err);
    }
    console.log("Salvo com Sucesso");
    // console.log(this);
  }

  // db.run(insertQuery, values, afterInsertData);

  // delete db.run(`DELETE FROM places WHERE id = ?`, [29], function (error) {
  //   if (error) {
  //     return console.error(error);
  //   }
  //   console.log("Deletado com sucesso");
  // });
});
