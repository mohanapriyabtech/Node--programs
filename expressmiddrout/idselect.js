
var express = require('express');

var app = express();
var alert =require('alert'); 

var courses = [
    { id: 1 ,name :'course1'},
    { id: 2 ,name :'course2'},
    { id: 3 ,name :'course3'},
    

];
function middleware1(req,res,next){
    console.log("I am a middleware");
    alert("welcome ");
    res.send("welcome middleware")
    next();

}
app.get("/",middleware1);
 app.get('/home',(req,res)=>res.send("Hello World"));

 app.get('/api/courses',(req,res)=>res.send(courses));
 
 app.get('/api/courses/:id',(req,res)=>{
 var course = courses.find(g => g.id ===parseInt(req.params.id));
 if(!course) res.status(404).send('The course with given id was not found');
 res.send(course);
 });

 const port =process.env.PORT ||4000 ;
 app.listen(port,()=>console.log(`server is running on ${port}`));
