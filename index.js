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

app.get("/api/todo", (req, res) => {
  console.log(todos);
  res.json(todos);
  res.status(200);
});

app.post("/api/todo", (req, res) => {
  console.log(req.body);
  todos.push(req.body);
  req.body;
  res.send("Ny uppgift tillagd");
});

app.put("/api/todo/id/4", (req, res) => {
  todos.pop(todos);
  todos.push(req.body);
  res.send("Uppdatering genomförd");
});

app.delete("/api/todo/id", (req, res) => {
  console.log(req.body);
  todos.pop(req.body);
  res.send("Uppgift borttagen");
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
