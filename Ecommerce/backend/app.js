const express=require ('express');
const app=express();
const dotenv=require ('dotenv');
const path=require ('path');
const cors = require ('cors');
const connectDataBase=require('./config/databseConnect');
dotenv.config({path:path.join(__dirname,'config','confic.env')});
const UserModel = require('./model/user')

const product=require ("./router/product");
const order=require ("./router/order");


connectDataBase();
app.use(express.json());
app.use(cors());
app.use('/api/v1',product);
app.use('/api/v1',order);



app.post('/register',(req,res)=>{
    UserModel.create(req.body).then(User=>res.json(User)).catch(err=>res.json(err))

})

app.post('/login',(req,res)=>{
    const {email ,password}=req.body;
    UserModel.findOne({email:email}).then(user=>{
        if(user){
            if (user.password===password){
                res.json("success")
            }else{
                res.json("not success")
            }
        }else{
            res.json("No record")
        }
    })
})

app.listen(process.env.PORT,()=>{
    console.log(`server is start at ${process.env.PORT} in ${process.env.ENV_VAR}`)
})