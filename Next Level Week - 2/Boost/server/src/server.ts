import express from "express";

const app = express();

app.post("/users", (request, response) => {
  const users = [
    { nome: "Alison", idade: 25 },
    { nome: "Diego", idade: 25 },
  ];
  return response.send(users);
});

app.listen(3333);
