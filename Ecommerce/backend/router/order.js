const express=require ('express');
const { orderController } = require('../controller/orderController');

const router=express.Router();

router.route('/order').post(orderController)

module.exports=router;