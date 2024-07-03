const mongoose=require ('mongoose');

const productSchema= mongoose.Schema({
    name:String,
    price:String,
    description:String,
    rating:String,
    images:[
        {
            image:String
        }
    ],
    catagory:String,
    seller:String,
    stock:String,
    NumOfReviews:String,
    createdAt:Date
});

const productModel= mongoose.model('product',productSchema);

module.exports=productModel;