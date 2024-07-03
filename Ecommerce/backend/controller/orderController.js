const express=require ('express');
const orderModel=require ('../model/orderModel');
const productModel=require('../model/productModel');

exports.orderController = async (req,res,next) =>{

    const cardItems=req.body;
    const amount= Number(cardItems.reduce((acc, item)=>(acc + item.product.price * item.qty),0)).toFixed(2);
    // console.log(amount, "amt")
    const status="pending"
const order= await orderModel.create({cardItems,amount,status});

//update
cardItems.forEach(async(item)=>{
    const product = await productModel.findById(item.product._id);
    product.stock=product.stock-item.qty;
    await product.save();
})

    res.json(
        {
            success:true,
            order
        })
    
}

