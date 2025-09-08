const express = require("express");
const path = require("path");
const port = 1008;

const app = express();

let todos = [
    { id: 1, task: "Buy groceries", priority: "High" },
    { id: 2, task: "Study JavaScript", priority: "Medium" },
    { id: 3, task: "Go for a walk", priority: "Low" },
];

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname)));


app.get("/", (req, res) => {
    res.render("index", { todos });
});


app.post("/addTask", (req, res) => {
    req.body.id = todos.length + 1;
    todos.push(req.body);
    res.redirect("/");
});


app.get("/deleteTask/:id", (req, res) => {
    todos = todos.filter((item) => item.id != req.params.id);
    res.redirect("/");
});


app.get("/editTask", (req, res) => {
    let singleData = todos.find((item) => item.id == req.query.id);
    res.render("edit", { singleData });
});


app.post("/updateTask", (req, res) => {
    let singleData = todos.find((item) => item.id == req.body.id);
    singleData.task = req.body.task;
    singleData.priority = req.body.priority;
    res.redirect("/");
});

app.listen(port, (err) => {
    err ? console.log(err) : console.log("Server started on port " + port);
});
