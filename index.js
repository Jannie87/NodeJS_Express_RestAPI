const express = require("express");
const app = express();
const port = 3000;
const { v4: uuidv4 } = require("uuid");
app.use(express.json());

let todos = [
  {
    name: "Fika",
    place: "ExpressoHouse",
    time: "18:00",
    id: "89dba575-1900-47f8-86cb-ce8a2a5f2929",
  },
  {
    name: "Möte",
    place: "Kontoret",
    time: "09:00",
    id: "323faee3-404e-46cc-b2e4-4bcf09ca9926",
  },
  {
    name: "Lunch",
    place: "Göteborg",
    time: "12:00",
    id: "d24676ae-d5cc-46f6-877c-63ef6ce0d4c9",
  },
];

app.get("/api/todos/", (req, res) => {
  res.status(200).json(todos);
});

app.post("/api/todos", (req, res) => {
  const todo = req.body;
  todos.push({ ...todo, id: uuidv4() });
  res.status(200).send("Ny uppgift tillagd");
});

app.put("/api/todos", (req, res) => {
  const { id, name, place, time } = req.body;
  let index = todos.findIndex((todo) => todo.id === id);

  if (index === -1) {
    return res.status(404).send("Ingen uppgift hittades");
  }

  todos[index] = req.body;
  res.send("Uppdatering genomförd!");
});

//removes one item
app.delete("/api/todos/:id", (req, res) => {
  const todoId = req.params.id;
  const todoExist = todos.find((todo) => todo.id === todoId);

  if (!todoExist) {
    res.status(404).send("Ingen uppgift togs bort");
  } else {
    todos = todos.filter(function (todo) {
      return todo.id !== todoId;
    });
    res.status(200).json;
    res.send("Uppgift borttagen");
  }
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
