var express = require("express");

var app = express();

var PORT = 3000;

var tables = {
    name: "",
    number: "",
    email: "",
    id: ""
};

var wtables = {
    name: "",
    number: "",
    email: "",
    id: ""
};


// Home
app.get("/", function(req, res){

});

// Reserve
app.get("/reserve", function(req, res){
    
});

// Tables
app.get("/tables", function(req, res){
    
});

// API Tables
app.get("/api/tables", function(req, res){
    return res.json(tables);
    
});

// API Waitlist
app.get("/api/waitlist", function(req, res){
    return res.json(wtables);
});

app.listen(PORT, function() {
    console.log("You're listening on PORT: localhost:" + PORT + "/");
});