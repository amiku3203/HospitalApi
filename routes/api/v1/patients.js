const express=require('express');


const router=express.Router();

const patientController=require('../../../Api_controllers/api/v1/patients');

router.post('/sign-up',patientController.signup);
 
router.post('/create-report',patientController.createReport);
 
router.post('/all-report',patientController.allReports);

router.post('/status',patientController.status);
module.exports=router;``