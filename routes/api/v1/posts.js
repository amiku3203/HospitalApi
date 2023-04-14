const express=require('express');


const router=express.Router();

const PostApiControllers=require('../../../Api_controllers/api/v1/post_api') ;

router.get('/',PostApiControllers.index);
 
// router.get('/register',PostApiControllers.Doctor);


module.exports=router;