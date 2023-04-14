const doctors = require('../../../models/doctors');
const { findOne } = require('../../../models/doctors');
const patients=require('../../../models/patients');
 
const reports=require('../../../models/reports');
 


module.exports.signup=async function(req,res){
   console.log(req.body); 
  try{
      const patient=await patients.findOne({name:req.body.name});
      if(patient){
         return res.json(200,{
             message:"patient already exists",
             name:req.body.name,
             phone:req.body.phone,
             _id:req.body._id
         })
      } else {
         const patient= await patients.create(req.body);
         return res.json(200,{
            message:"Patient Registered",
            patient:patient
         })
      }
  }catch(err){
    console.log('*******',err);
     return res.json(500,{
       message:"Internal Server eror"
     })
  }
        
}


module.exports.createReport=async function(req,res){
    
   const status  = req.body;
  console.log(status);
   if (!status) {
      res.status(400);
      throw new Error("please enter the status");
   }
 
 
   return   res.status(200).json({
         _id: req.body.id,
         Created_By: req.body.created_by,
         Staus: req.body.status,
         Date:  req.body.date,
      });
   }  
   

   module.exports.allReports=function(req,res){
      
         return res.json(200,{
            message:"All reports",
            reports: patients
            
         })
   }

   module.exports.status= async function(req,res){
       
         try {
            const { status } = req.params;
      
            const result = await reports.find({ status: status });
            if (result.length > 0) {
               return res.status(200).json(result);
            } else {
               return res.status(200).json({ message: "there is no result found!" });
            }
         } catch (error) {
            return res.status(400).json(error);
         }
   }