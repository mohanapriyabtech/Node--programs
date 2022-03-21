
var express = require('express');

var app = express();
var bodyparser= require('body-parser');
var urlencodedparser= bodyparser.urlencoded({extended:false})
// var routing = require('./routing');      // use routing to display id on terminal

// app.use('/',routing);


app.get('/',(req,res)=>res.sendFile(__dirname+"/"+"reg.html"));


 app.post('/home',urlencodedparser,(req,res)=>res.send(req.body));
 app.get('/home/:year/:month',(req,res)=>res.send(req.params));

 // print the id on browser

//  app.get('/:id',(req,res)=>res.send('User id:'+req.params.id));

 
 app.listen(5000,()=>console.log("server is running"));



  
//  var routing = require('./routing');


//  app.use('/us',routing);
