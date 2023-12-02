const express = require('express');
const mongoose =require('mongoose');

const app =express();
const Port =5000;

app.use(express.json());
const connectDb =async()=>{
    try {
        await mongoose.connect('mongodb+srv://snehalmishra:123@cluster0.8owrboj.mongodb.net/Flipkart')
        console.log("Connected to database");
    } catch (error) {
        console.log(error.message);
    }
}

connectDb();


// Problem statement for E-commerce(Flipkart);
// Product , Userdetail, Orders, wishlists.

const {Schema} =mongoose;
const UserdetailSchema =new Schema({
    username:{
        type:String,
        required:true,
        lowercase:true,
        minlength:5,
        maxlength:10
    },
    email:{
        type:String,
        required:true,
        unique:true,
        // pattern :including @ : regular expression; .com
       
        trim:true,//remove spaces,
        
    },
    password:{
        type:String,
        required:true,
        //pattern : custom validation ;
        //custom validaton : we want to check whether password length greater than 7;
        validate:{
            validator:function(value){
                //custom logic 
                return value.length>7;
            },
            message:"Password should be greater than 7 characters"
        }

    },
    // custom schema ;

})

const UserModel =mongoose.model('FlipkarUsers',UserdetailSchema);

const ProductSchema =new Schema({
    productname:{
        type:String,
        required:true, 
    },
    category:{
        type:String,
        required:true
    },
    productdetails:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    productQuantity:{
        type:Number,
        required:true,
        default:10
    },
    productImage:{
        type:String
    },
    // discount 
    rating:{
        type:String,

    },
    


})

const ProductModel =mongoose.model('FlipkarProducts',ProductSchema);




//User model : register and login : 

app.post('/user/register',async(req, res)=>{
    // registration logic 
    try {
        const {email,password,username} =req.body;
        const insertedData = await UserModel.create({
            email,
            password,
            username
        })
       
        res.json({
            message:"data inserted successfully",
            insertedData
        })

        
    } catch (error) {
        console.log(error.message);
        res.json({
            message:error.message
        })
    }
    
})

app.post('/user/login',(req,res)=>{
    // login logic
})






app.listen(Port,()=>{
    console.log(`server is working on Port ${Port}`)
})

