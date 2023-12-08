const  mongoose  = require('mongoose');
const reviewModel = require('../models/review.model');
const bookModel = require('../models/book.model');
const Schema = mongoose.Schema;

const submitReview = async (req,res)=>{
    const {userId,bookid,comment,rating} = req.body;
    // const{userId} = req.params;

    try {
        
console.log(typeof(userId));

// console.log(req.body);

    // if(isValidObjectId(userId)){

    //     console.log("valid user id");
    //     // return res.status(400).json({
    //     //     message:"Not a valid user"
    //     // })
    // }

   //  const userid =new mongoose.Types.ObjectId(userId);

     console.log(typeof(userid));


    const book = await bookModel.find({_id:bookid})
        if(!book){
            return res.status(400).json({
                message:"Book not found"
            })
        }

        const newReview = new reviewModel({
            userId:userId,
            bookId:bookid,
            comment:comment,
            rating:rating
        })
        const reviewSaveIfNotPresent = await newReview.save()  ; 
     
        if(!reviewSaveIfNotPresent){
            res.status(400).json({
                message:"Review Not Saved",
                reviewSaveIfNotPresent
            })
        }
    // const reviewAdd = await reviewModel.findByIdAndUpdate({ userId,bookId:bookid,comment,rating});

    // if(!reviewAdd){
    
    // }

     res.status(200).json({
        message:"Review Submitted Successfully",
        reviewSaveIfNotPresent
    })

    } catch (error) {
        console.log("Something went wrong",error);
        return res.status(500).json({
            message:`Something went wrong ${error.message}`
        })
    }
}



module.exports = {submitReview}