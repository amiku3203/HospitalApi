const mongoose=require('mongoose');
const Doctorschema=new mongoose.Schema({
          
          name:{
            type:String,
            required:true
           },
           password:{
              type:Number,
              required:true
           }
          
},{
    timestamps:true
});
const doctors=mongoose.model("doctors",Doctorschema);
module.exports= doctors;