var bodyParser=require("body-parser");
//sample items given that we hace uswd the local server!!!
var data=[{item:"get juice"},{item:"get the bread"},{item:"finish the codes"}];
var urlencodedParser=bodyParser.urlencoded({extended:false});

module.exports = function(app){
  //the request handlers!!!
  app.get("/todo",function(req,res){
    res.render("todo.ejs",{todos:data});
  });

  app.post("/todo",urlencodedParser,function(req,res){
    data.push(req.body);//pushes the new ite to the array!!!
    res.json(data);//returns the array!!!
  });

  app.delete("/todo/:item",function(req,res){
    data=data.filter(function(todo){
      return todo.item.replace(/ /g, "-") !== req.params.item;
    });//return false if the match occurs and the item gets filtered out!!!
    res.json(data);//returns the array!!!
  });
};
