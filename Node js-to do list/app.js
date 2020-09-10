//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

var items = ["Buy food", "Cook food", "Eat food"];
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/", function(req,res){
// res.sendFile(__dirname + "/index.html");

var today = new Date();

var options = {
   weekday : "long",
   year : "numeric",
   month : "long",
   day : "numeric"
};

var day = today.toLocaleDateString("en-US", options);

res.render("list", {kindOfDay: day, newListItems: items });
});

app.post("/", function(req,res){
// console.log(req.body.newItem);
var item = req.body.newItem;
items.push(item);
res.redirect("/");
});

app.listen(3000, function(){
  console.log("The server is running on port 3000");
});
