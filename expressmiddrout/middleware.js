var express= require('express');  //application middleware
var app = express();
var alert =require('alert');    // showing the middleware action in alert box

app.use(function(req,res,next){
    alert("welcome");
    console.log("request method is :",req.method,"and",req.url);
    next();
});
app.get("/",function(req,res,next){
    console.log("first page");
    res.send("welcome to sparkout");
                               //for next middleware run
});
app.get("/exit",function(req,res,next){
    console.log("second page");
    res.send("Have a nice day");
    next();                             //for next middleware run
    
});

app.use(function(req,res,next){
    alert("The end");
    

});
app.listen(7000);
