const express=require ('express');
const productModel=require('../model/productModel')

exports. products=async (req,res,next)=>{
    const query = req.query.keyword?{name:{
            $regex: req.query.keyword,
            $options: 'i' // 'i' for case-insensitive
        }} : {}
    const product=await productModel.find(query);
    res.json({
            message:true,
            product
        })
}
exports.singleProducts=async (req,res,next)=>{
    try{
        const product=await productModel.findById(req.params.id);
        res.json(
           {
                message:true,
                product
            })
        

    }catch(error){

        ({
            message:false,
            info:"Item Not found"

        })
        

    }
  
}