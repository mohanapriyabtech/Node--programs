const express =require("express");
const { verify } = require("jsonwebtoken");

const jsonwebtoken = require("jsonwebtoken");
const app = express();



app.get("/",(req,res)=>{

    // let token = await jsonwebtoken.sign({
    //     num: "ajay3500"
    // },"hsdhsdgbshdfasbdidhsihdaiedhasiudy78dvshdv6q2vsj");
    //     console.log(token);

    res.json({
        message : "success" , 
        // token : token 

    });
});

app.post("/login" ,(req,res)=>{
    const user={
        id: 1,
        username: "Ajay" ,
        email:"ajay@gmail.com",

    };
    jsonwebtoken.sign({user},"secretkey",(err,token)=>{
        res.json({
            token,
        });
    });
});


app.post("/posts",verifyToken,(req,res)=>{

    jsonwebtoken.verify(req.token,"secretkey",(err,authData)=>{
        if (err){
            res.sendStatus(403)
        }else{
    

    res.json({
        message :"post created",
        authData ,
    });
}

});
    
});


function verifyToken(req,res,next){ 
    const bearerHeader =req.headers['authorization'];
    if(typeof bearerHeader !== 'undefined'){

        const bearer=bearerHeader.split(' ');
        const bearertoken= bearer[1];

        req.token= bearertoken,
        next();
    }else{
        res.sendStatus(403)
    }

    }


// app.get("/check/:token",async(req,res)=>{

//     console.log(req.params.token);

//     let token=req.params.token;
//    try{
//     let tokenResult=await jsonwebtoken.verify(token,"hsdhsdgbshdfasbdidhsihdaiedhasiudy78dvshdv6q2vsj");
//     console.log(tokenResult);

//     console.log(mid);

//     if(tokenResult){

    
//     res.json({
//         message : "success" , 
        
//     });
// }else{
//     res.status(500).json({
//         message:"something went wrong",
//     });
// }

// }catch(error){
//     res.status(401).json({
//         message : "Error",
//     })

// }

    

// });




app.listen(3000,()=>{
    console.log("server listening on port 3000");

});