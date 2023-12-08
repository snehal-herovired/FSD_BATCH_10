const express = require('express');
const app = express();
app.use(express.json());
require('dotenv').config();
const PORT = process.env.PORT;

const dbConnect = require('./dbConnect');
dbConnect();

const UserRouter = require('./routes/user.route');
app.use('/User',UserRouter)

const BookRouter = require('./routes/book.route');
app.use('/Books',BookRouter);

const ReviewRouter = require('./routes/review.route');
app.use('/Reviews',ReviewRouter);


const CartRouter = require('./routes/cart.route');
app.use('/Cart',CartRouter);


// middleware error handling
app.use('*',(req,res,next)=>{
    const error = new Error(`Routes dose not exist or not providing correct request ${req.url}`);
    error.status = 400;
    next(error);
})
app.use('*',(err,req,res,next)=>{
    if(!err){
        next();
    }
    res.status(400).json({
        error : err.message
    })
})

app.listen(PORT,()=>{
    console.log(`Server started on port ${PORT}`);
})