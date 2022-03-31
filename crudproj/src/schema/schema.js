
var mongoose = require("mongoose");


const schema = mongoose.Schema({
    
    name: {
        type: String,required : true
    },
    age:{
        type:Number,require:true
    },
    email: {
        type: String, required : true,unique: true, match :/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    },
    
    password:{
        type: String, required: true
    },
    confirmpassword:{
        type:String,required:true
    }


});

module.exports = mongoose.model('userdetails',schema);

  
    