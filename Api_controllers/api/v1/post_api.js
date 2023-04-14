 const Doctor=require('../../../models/doctors');
module.exports.index=function(req,res){
     return res.json(200,{
        message:"Lucifer MorningStar",
        posts:[]
     })
}

 