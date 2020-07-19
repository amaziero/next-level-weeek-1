const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./database/database.db");

module.exports = db;

// db.serialize(() => {
//   // create
//   db.run(`
//       CREATE TABLE IF NOT EXISTS places (
//         id INTEGER PRIMARY KEY AUTOINCREMENT,
//         name TEXT,
//         image TEXT,
//         adress TEXT,
//         adress2 TEXT,
//         state TEXT,
//         city TEXT,
//         item TEXT
//     );
//   `);

//   // read
//   // db.all(`SELECT * FROM places`, function (error, rows) {
//   //   if (error) {
//   //     return console.error(error);
//   //   }

//   //   console.log("Aqui estão seus registros");
//   //   console.log(rows);
//   // });

//   // push
//   const insertQuery = `INSERT INTO places
//       ( name, image, adress, adress2, state, city, item )
//       VALUES (?, ?, ?, ?, ?, ?, ?);
//   `;
//   const values = `
//         "",
//         "Papersider",
//         "Guilherme Gebalha, Jardim América",
//         "Número 3",
//         "Santa Catarina",
//         "Rio do Sul",
//         "Papéis e Papelão"
//   `;

//   function afterInsert(err) {
//     if (err) {
//       return console.error(err);
//     }

//     console.log("Salvo com Sucesso");
//     console.log(this);
//   }
//   db.run(insertQuery, values, afterInsert);

//   // delete
//   // db.run(`DELETE FROM places WHERE id = ?`, [1], function (error) {
//   //   if (error) {
//   //     return console.error(error);
//   //   }

//   //   console.log("Deletado com sucesso");
//   // });
// });
