
    var express =require("express");
    
    var mongoose = require("mongoose");
    var schema = require('../src/schema/schema');
    const bcrypt = require('bcryptjs');
    const token = require("jsonwebtoken");


    
    
    const app= express();

    app.use(express.json());

    app.use(express.urlencoded({extended:true}));


    mongoose.connect("mongodb://127.0.0.1:27017/firstdb");
    var db = mongoose.connection;

    db.on('error',()=>console.log("error in connecting database"));
    db.once('open',()=>console.log("connceted to database"));

    app.post('/login',async(req,res)=>{
       const {name ,password}=req.body;

       const user=await schema.findOne({name).lean()  ;


        if(!user){
            return res.json({status:'error',error:'Invalid Username/password'});
        }        
        if(await bcrypt.compare(password,user.password)){

            const token =jwt.sign({
                name:user.name
            })

            return res.json({status:'ok',data:'  '});
        }

       res.json({status :'ok',data:'COMING SOON'})

        
        
          
        });
      
    });


        
    


    // localhost/homepage
    app.get('/',(req,res)=>{ 

        res.send("home page");
        console.log("hello world");
    });


    // register page -post method
    app.post('/registerpage',async(req,res)=>{ 

        const details = req.body ;

        const user =await schema.create(details)  
        
       .then((user)=>{res.send(user);
        console.log(" register completed");
       })
        .catch((errors)=>{res.send(errors.message)});

 
    });

    // update user details-patch method
    app.patch('/user/:id',async(req,res)=>{ 


        const id =req.params.id;

        const update = await schema.findOneAndUpdate({id:id},{$set:req.body})
      
        .then((update)=>{res.send(update);
       
            console.log(" updated");
       })
        .catch((errors)=>{res.send(errors.message)});

    });

   // delete the user details
    app.delete('/del/:id',async(req,res)=>{
        const id= req.params.id;
        
        const details = req.body ;

      const update = await schema.deleteOne({id:id})
      
        .then((update)=>{res.send(update);
       
            console.log(" updated");
       })
        .catch((errors)=>{res.send(errors.message)}); 
    });


  // search the user details

  app.post('/:name',async(req,res)=>{ 

    const name = req.params.name;

    const details = req.body ;

  const finduser = await schema.findOne({name:req.body.name})
  
    .then((finduser)=>{res.send(finduser);
   
        console.log(finduser);
   })
    .catch((errors)=>{res.send(errors.message)});
});




    app.listen(7000,() =>{
    console.log("listening  on port 7000");

    });


