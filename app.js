var express=require("express");
var todoController=require("./controllers/todoController.js");
var app=express();


//the template engine is set!!!
app.set("view engine","ejs");

//static files are placed in /public/assets
app.use(express.static("./public"));

todoController(app);
//listening to port 3000!!!
app.listen(3000);

console.log("listening to port 3000!!!");
