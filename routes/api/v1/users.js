const express=require('express');
const router=express.Router();

const userapi=require('../../../Api_controllers/api/v1/doctors');

router.post('/create-session',userapi.createSession);
router.post('/sign-up',userapi.signUp);
 


module.exports=router;