const { isValidObjectId } = require('mongoose');
const bookModel = require('../models/book.model');

const addBook = async (req, res) => {
    try {
        const { title, author, price, quantity, review } = req.body;
        if (!title || !author || !price || !quantity) {
            return res.status(404).json({
                message: "Please fill all the fields"
            })
        }

        const newBook = await bookModel.create({
            title: title,
            author: author,
            price: price,
            quantity: quantity,
            review: [{}, {}]
        })

        if (!newBook) {
            return res.status(404).json({
                message: 'Book data not saved'
            })
        }

        res.status(200).json({
            message: 'data saved successfully',
            newBook
        })

    } catch (error) {
        return res.status(500).json({
            message: `Something went wrong ${error.message}`,
            error
        })
    }
}

const updateTitle = async (req, res)=>{
    try {
        const { id } = req.params;
        const { titleName } = req.body;
        if (!titleName) {
            return res.status(404).json({
                message: "please fill data"
            })
        }

        const updateTitle = await bookModel.findByIdAndUpdate({_id:id},{title:titleName});
        if(!updateTitle){
            return res.status(404).json({
                message:'Data not updated'
            })
        }

        res.status(200).json({
            message:'Title updated successfully',
            updateTitle
        })
    } catch (error) {
        console.log("title fiel not updated",error);
        return res.status(500).json({
            message:`Something went wrong ${error.message}`,
            error
        })
    }
}

const updateAuthor = async (req,res)=>{
    try {
        const { id } = req.params;
        const { authorName } = req.body;
        if (!authorName) {
            return res.status(404).json({
                message: "please fill data"
            })
        }

        const updateAuthor = await bookModel.findByIdAndUpdate({_id:id},{author:authorName});
        if(!updateAuthor){
            return res.status(404).json({
                message:'Data not updated'
            })
        }

        res.status(200).json({
            message:'Author updated successfully',
            updateAuthor
        })
    } catch (error) {
        console.log("author field not updated",error);
        return res.status(500).json({
            message:`Something went wrong ${error.message}`,
            error
        })
    }
}

const updatePrice = async (req,res)=>{
    try {
        const { id } = req.params;
        const { Bookprice } = req.body;
        if (!Bookprice) {
            return res.status(404).json({
                message: "please fill data"
            })
        }

        const updatedata = await bookModel.findByIdAndUpdate({_id:id},{price:Bookprice});
        if(!updatedata){
            return res.status(404).json({
                message:'Data not updated'
            })
        }

        res.status(200).json({
            message:'Price updated successfully',
            updatedata
        })
    } catch (error) {
        console.log("price field not updated",error);
        return res.status(500).json({
            message:`Something went wrong ${error.message}`,
            error
        })
    }
}

const updateQunatity = async (req,res)=>{
    try {
        const { id } = req.params;
        const { qty } = req.body;
        if (!qty) {
            return res.status(404).json({
                message: "please fill data"
            })
        }

        const updatedata = await bookModel.findByIdAndUpdate({_id:id},{quantity:qty});
        if(!updatedata){
            return res.status(404).json({
                message:'Data not updated'
            })
        }

        res.status(200).json({
            message:'Book qunatity updated successfully',
            updatedata
        })
    } catch (error) {
        console.log("quantity field not updated",error);
        return res.status(500).json({
            message:`Something went wrong ${error.message}`,
            error
        })
    }

}


const getByTitle = async (req,res)=>{
    try {
        const {title}=req.body;
        console.log(req.body);

        if(!title){
            return res.staus(400).json({
                message:"title field is required"
            })
        }

        const getBook = await bookModel.find({title:title});
        if(!getBook){
            return res.status(400).json({
                message:'Book not found'
            })
        }

        res.status(200).json({
            message:"Found Book",
            getBook
        })
    } catch (error) {
        console.log("something went wrong");
        return res.status(500).json({
            message:`Something went wrong ${error.message}`,
            error
        })
    }
}

const getByAuthor = async (req,res)=>{
    try {
        const {author}=req.body;
        // console.log(req.body);

        if(!author){
            return res.staus(400).json({
                message:"title field is required"
            })
        }

        const getBook = await bookModel.find({author:author});
        if(!getBook){
            return res.status(400).json({
                message:'Book not found'
            })
        }

        res.status(200).json({
            message:"Found Book",
            getBook
        })
    } catch (error) {
        console.log("something went wrong");
        return res.status(500).json({
            message:`Something went wrong ${error.message}`,
            error
        })
    }
}


const getAllbooks = async (req,res)=>{
    try {
        
        const getAllBooks = await bookModel.find({});
        if(!getAllBooks){
            return res.staus(400).json({
                message:"Books Not Found :("
            })
        }

        res.status(200).json({
            message:"All Books Found",
            getAllBooks
        })
    } catch (error) {
        console.log("something went wrong");
        return res.status(500).json({
            message:`Something went wrong ${error.message}`,
            error
        })
    }
}

const deleteBook = async (req,res)=>{
    const {id} = req.query;
    try {
        if(!isValidObjectId(id)){
            return res.status(400).json({
                message:"not valid id"
            })  
        }
        const deletedBook = await bookModel.findByIdAndDelete({_id:id});
        if(!deletedBook){
            return res.status(400).json({
                message:"Book not found and not deleted"
            })
        }
        res.status(200).json({
            message: "Book deleted ",
            deletedBook
        })
    } catch (error) {
        console.log("something went wrong");
        return res.status(500).json({
            message:`Something went wrong ${error.message}`,
            error
        })
    }
}
module.exports = { addBook,updateTitle,updateAuthor,updatePrice,updateQunatity,getByTitle,getByAuthor,getAllbooks,deleteBook };