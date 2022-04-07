const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());
app.use("/", (req, res, next) => {
  console.log("api visited");
  next();
});

app.use("/", express.static("public"));
const todos = [
  {
    name: "Uppgift 1",
  },
  {
    name: "Uppgift 2",
  },
  {
    name: "Uppgift 3",
  },
];

app.get("/api/todo", (req, res) => {
  res.json(todos);
});

app.post("/api/todo", (req, res) => {
  console.log(req.body);
  todos.push(req.body);
  res.status(201).send("Todo tillagd");
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
