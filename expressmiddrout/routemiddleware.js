var express= require('express');  
var app = express();
var alert =require('alert');    // showing the middleware action in alert box
var router=express.Router();      //routing middleware

router.use(function(req,res,next){
    alert("welcome");
    console.log("request method is :",req.method,"and",req.url);
    next();
});
app.get("/home",function(req,res,next){
    console.log("first page");
    res.send("go to home page");
    next();
});
router.get("/contact",function(req,res,next){           //start the routing localhost:8090/home/contact
    console.log("second page");
    res.send("contact details are here");
    
    
});
router.get("/exit",function(req,res,next){              //start the routing localhost:8090/home/exit
    console.log("Third page");
    res.send("exit here");
    
    
});

app.use('/home',router);             //start the routing localhost:8090/home

app.listen(8090);
