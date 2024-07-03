const express=require ('express');
const { products, singleProducts } = require('../controller/productController');
const router=express.Router();


router.route('/product').get(products);
router.route('/product/:id').get(singleProducts);

module.exports=router
