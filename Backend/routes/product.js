const express=require('express')
const router=express.Router();
const coinController=require('../controllers/coins');

//route for getting data from database
router.get('/get-data',coinController.showCoins)


//route for getting data from api

//router.get('/get-data-api',coinController.getCoins)


module.exports=router;