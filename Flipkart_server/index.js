const express = require('express');
const mongoose = require('mongoose');

const app = express();
const Port = 5000;

app.use(express.json());
const connectDb = async () => {
    try {
        await mongoose.connect('mongodb+srv://snehalmishra:123@cluster0.8owrboj.mongodb.net/Flipkart')
        console.log("Connected to database");
    } catch (error) {
        console.log(error.message);
    }
}

connectDb();


// Problem statement for E-commerce(Flipkart);
// Product , Userdetail, Orders, comments;



//user , message

const UserRoute =require('./routes/user.routes');

//in order to user any kind of custom route or any external middleware 
// we use app.use() : loader method
// /user/register
app.use('/user',UserRoute);

// reading operation
app.post('/user/login', )



app.post('/user/:id', async (req, res) => {
    // req.params
    const { id } = req.params;
    const { username } = req.body;

    //update operation of mongoose;
    const updatedDoc = await UserModel.findByIdAndUpdate(id, { username: username }, { new: true });

    res.json({
        message: "Document updated",
        updatedDoc
    })

})


//Adding new product
app.post('/product/new', async (req, res) => {
    //adding new product
    try {
        const { productname, category, productdetails, price, rating } = req.body;

        const insertedProduct = await ProductModel.create({
            productname,
            category,
            productdetails,
            price,
            rating
        })

        res.status(200).json({
            message: "Product inserted successfully",
            insertedProduct
        })
    } catch (error) {
        console.log(error.message);
        res.status(404).json({
            message: error.message
        })
    }

})

// update the product detail;
app.post('/product/update/:id', async (req, res) => {
    try {
        //details of updating the product
        const { id } = req.params
        const { productdetails, price } = req.body;
        //id : params                                              //unqiue fields
        const updatedProduct = await ProductModel.findOneAndUpdate({_id:id}, { productdetails:productdetails,price:price},{new:true})
        res.status(201).json({
            message: "Product data Updated",
            updatedProduct
        })
    } catch (error) {
        console.log(error.message);
        res.status(404).json({
            message: error.message
        })
    }
})

// Make endpoint to filter the data  of product based on price;
// see product price less than equal to 35000; GET 
// see product price less than equal to what user is providing the price;
// how to work with req.query
//www.google.com/gmail?category=1000
//$lte : less than equal to 
//$gte: greater than equal to
//$eq: eual to

//minPrice and maxPrice 
app.post('/product/filter',async(req,res)=>{
     try {
        const {minprice,maxprice} =req.query;
         
        // const filteredProduct =await ProductModel.find({price:{$gte:price}});
        // const filteredProduct =await ProductModel.find({price:{$lte:price}});
        // const filteredProduct =await ProductModel.find({price:{$eq:price}});
        const filteredProduct =await ProductModel.find({price:{$gte:minprice,$lte:maxprice}});
        res.status(200).json({
            filteredProduct
        })
     } catch (error) {
        console.log(error.message);
        res.status(404).json({
            message:error.message
        })
     }

})

// Make Api endpoint to delete the product by ID ********************

// api endpoints for creating comments : 
app.post('/comment/create',async(req,res)=>{
    //comment msg, userid,productid;
   try {
    const {commentMsg,userId,productId} =req.body;

    const createdComment = await commentModel.create({
        commentMsg,userId,productId
    })

    res.status(200).json({
        message:"Comments created.",
        createdComment
    })
   } catch (error) {
    console.log(error.message,"from comment api");
    res.status(404).json({
        message:error.message
    })
   }
})

// API endpoint to get all comments;
app.get('/comment/read',async(req,res)=>{
    try {
        const allComments = await commentModel.find().populate('userId').populate('productId');
        res.status(200).json({
            message:"all documents",
            allComments
        })
    } catch (error) {
        console.log(error);
        res.status(404).json({
            message:error.message
        })
    }
})


app.use('*',(req,res,next)=>{
 const error =new Error('The route does not exists.')
 next(error);
})
const errorHandler= require('./utils/errorHandler')
app.use(errorHandler);
// API endpoint to update your comment using userID for the same product;***************
//updateOne();
app.listen(Port, () => {
    console.log(`server is working on Port ${Port}`)
})


app.get('/getinfo',)
//Model,view and controller structure;
//MVCR : Routes 

//Model : schema and model definintion of db;
//Controller : callback function which handles req and res object for apartivular
// api endpoint.
//view : rendering html templates or Ui templates from your server.

// Main Pointer :
//  Modularity and folder structure for more readable codes.
// Error handling becomes easy.
// Avoid repeated codes.
// Clear separation
// Easy to maintain and upgrade in future.

//  client --API ---server
//          http://localhost:5000/getinfo


//Middleware?
//app.use() :loader function
//How to handle custom error handler.
//Authorization and use of JSONWEBTOKEN.

//Middle ware : function or method;


// function(req,res,next){
//     // middleware function logic here
// }
//next() : function to passs control from one middleware to another;

//app.use() : mount function to load middlewares;