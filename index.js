const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.use("/", express.static("public"));

const todos = [
  {
    id: 1,
    name: "Fika",
    place: "ExpressoHouse",
    time: "18:00",
  },
  {
    id: 2,
    name: "Möte",
    place: "Kontoret",
    time: "09:00",
  },
  {
    id: 3,
    name: "Lunch",
    place: "Göteborg",
    time: "12:00",
  },
];

app.get("/api/todos/", (req, res) => {
  if (todos.length === 0) {
    console.log("Error");
    res.status(404).send("Inga uppgifter hittades");
  } else {
    console.log(todos);
    res.json(todos);
    res.status(200);
  }
});

app.post("/api/todos", (req, res) => {
  console.log(req.body);
  todos.push(req.body);
  req.body;
  res.send("Ny uppgift tillagd");
});

app.put("/api/todos/:id", (req, res) => {
  const id = todos.find((todo) => (todo.id = req.params.id));
  if (todos.id === -1) {
    console.log("Error");
    res.status(404).send("Uppgiften hittades ej");
  } else {
    // const update = {
    //   id: 4,
    //   name: "Tandläkare",
    //   place: "Göteborg",
    //   time: "17:00",
    // };
    todos.splice(3, 1);
    req.body;
    console.log(req.body);

    res.send("Uppdatering genomförd");
  }
});

app.delete("/api/todos/:id", (req, res) => {
  req.params.id;
  if (todos.id === -1) {
    console.log("Error");
    res.status(404).send("Ingen uppgift togs bort");
  } else {
    todos.splice(3, 1);
    res.send("Uppgift borttagen");
    console.log(req.body);
  }
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
