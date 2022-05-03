const express = require("express");
const app = express();
const port = 3000;
const { v4: uuidv4 } = require("uuid");
app.use(express.json());

app.use("/", express.static("public"));

const todos = [
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
  res.json(todos);
  res.status(200);
});

app.post("/api/todos", (req, res) => {
  const todo = req.body;
  res.status(200);
  todos.push({ ...todo, id: uuidv4() });
  res.send("Ny uppgift tillagd");
});

app.put("/api/todos/:id", (req, res) => {
  const todoId = req.params.id;
  todos.find((todo) => todo.id === todoId);
  if (!todoId) {
    res.status(404).send("ingen uppgift hittades");
    console.log(error);
  } else {
    todos.splice(2, 1, { ...req.body });
    res.send("Uppdatering genomförd");
    console.log(req.body);
  }
});

//removes one item
app.delete("/api/todos/:id", (req, res) => {
  const todoId = req.params.id;
  if (todos.id === todoId) {
    console.log("Error");
    res.status(404).send("Ingen uppgift togs bort");
  } else {
    todos.splice(1, 1);
    res.send("Uppgift borttagen");
    console.log(req.body);
  }
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
