const Doctor=require('../../../models/doctors');


const Jwt=require('jsonwebtoken');

module.exports.signUp=async function(req,res){
     try{
        const doctor=await Doctor.create(req.body);
        return res.status(200).json({
            success: true,
            message:doctor
        });

     } catch(err){
        return res.json(500,{
            success:false,
            message:'Internal server eror'
        })
     }
}




module.exports.createSession=async function(req,res){
    try{
   let doctor=await Doctor.findOne({name:req.body.name}) 
        if(!doctor|| doctor.password!=req.body.password){
          return res.json(422,{
             message:"Invalid Username or Password"
          })
        } else {
            return res.json(200,{
                message:"Sign in successful,here is your token,please keep it safe",
                data:{
                   token:Jwt.sign(doctor.toJSON(),'Hospital',{expiresIn:'10000000'})
                }
            })
        }

    }catch(err){
        console.log('*******',err);
        return res.json(500,{
            message:"Internal Server Eror"
        })
    }
}