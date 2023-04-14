const mongoose=require('mongoose');
const patientschema=new mongoose.Schema({
     name:{
        type:String,
        required:true
       },
       phone:{
          type:Number,
          required: true
       },
        doctor:{
          type:mongoose.Schema.Types.ObjectId,
          ref:'doctors'
     },
     report: [
        {
           type: mongoose.Schema.Types.ObjectId,
           ref: "Report",
        },
     ],
},{
    timestamps:true
});
const patients=mongoose.model("patients", patientschema);
module.exports=patients;