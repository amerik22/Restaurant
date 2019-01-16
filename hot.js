var express = require("express");
var path = require("path");

var app = express();

var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var tables = [{
    name: "",
    number: "",
    email: "",
    id: ""
}];

var wtables = [{
    name: "",
    number: "",
    email: "",
    id: ""
}];

// Home
app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "index.html"));
});

// Reserve
app.get("/reserve", function(req, res){
    res.sendFile(path.join(__dirname, "reserve.html"));
});

// Tables
app.get("/tables", function(req, res){
    res.sendFile(path.join(__dirname, "tables.html"));
});

// API Tables
app.get("/api/tables", function(req, res){
    return res.json(tables);
});

app.post("/api/tables", function(req, res) {
    var newtable = req.body;
    newtable.routeName = newtable.name.replace(/\s+/g, "").toLowerCase();

  console.log(newtable);

  tables.push(newtable);

  res.json(newtable);
});

// API Waitlist
app.get("/api/waitlist", function(req, res){
    return res.json(wtables);
});

app.post("/api/waitlist", function(req, res) {
    var newWtable = req.body;
    newWtable.routeName = newWtable.name.replace(/\s+/g, "").toLowerCase();

  console.log(newWtable);

  wtables.push(newWtable);

  res.json(newWtable);
});

app.listen(PORT, function() {
    console.log("You're listening on PORT: localhost:" + PORT + "/");
});