const mongoose = require('mongoose');
const CartModel = require('../models/cart.model');
const bookModel = require('../models/book.model');
const validObjectId = new mongoose.Types.ObjectId();

const createCart = async (req, res) => {
    try {
        const { user } = req.body;
        const cart = new CartModel({
            user: user
        })
        const cartCreated = await cart.save();
        res.status(200).json({
            message: "Cart Created Successfully",
            cartCreated
        })



    } catch (error) {
        console.log("Something Went Worng  while creating cart", error);

        res.status(500).json({
            message: `Error Creating Cart ${error.message}`
        })
    }
}

const addToCart = async (req, res) => {
    try {
        const { cartId, userId, bookId, quantity } = req.body;

        // console.log(userId,bookId,quantity);

        const cart = await CartModel.findById({ _id: cartId });

        const book = await bookModel.findById({ _id: bookId });

        // Check if the book with the given bookIdToCheck already exists in the cart
        // Find the index of the book in the cart
        const bookIndex = cart.books.findIndex(bookItem => bookItem.bookId.toString() === bookId.toString());
        const qty = parseInt(quantity);
        const bookPrice = parseInt(book.price);

        if (!cart) {
            return res.status(400).json({
                message: "Cart not Found"
            })
        }

        if (!book) {
            return res.status(400).json({
                message: "Book not Found"
            })
        }

        if (bookIndex == -1) {
            cart.books.push({

                bookId: bookId,
                quantity: qty,
                price: bookPrice,
                totalPrice: (bookPrice * qty)

            });
            cart.totalItems += qty;
            cart.totalPrice += (bookPrice * qty);
            let cartAdded = await cart.save();
            res.status(200).json({
                success: true,
                message: 'Item added to cart successfully',
                cartAdded
            });
        } else {
            //if book index is not -1 than book already exisit in the cart 
            // update the qunatity and total price and save the document

            cart.books[bookIndex].quantity += qty;
            cart.books[bookIndex].totalPrice = cart.books[bookIndex].price * cart.books[bookIndex].quantity;

            //updateing totalPrice and totalItems in the cart
            // cart.totalItems += parseInt(cart.books[bookIndex].qty);
            cart.totalPrice += bookPrice * qty;

            //save the cart
            const savedCart = await cart.save();
            res.status(200).json({
                message: "Successfully updated book quantity",
                savedCart
            });
        }


    } catch (error) {
        console.log("Something Went Worng  while adding item to cart", error);
        res.status(500).json({
            message: `Error adding item to Cart ${error.message}`
        })
    }
}

const getAllCarts = async (req, res) => {
    try {
        const getAllCart = await CartModel.find({});
        if (!getAllCart) {
            return res.status(400).json({
                message: "Cart is Empty"
            });
        }

        return res.status(200).json({
            message: "Cart Found",
            getAllCart
        })

    } catch (error) {
        console.log("Something Went Worng  while getting all carts", error);
        res.status(500).json({
            message: `Error getting Carts ${error.message}`
        })
    }
}

const updateCartItem = async (req, res) => {
    const { id } = req.params;
    const { cardId, quantity } = req.body;


    try {



        const cart = await CartModel.findById({ _id: cardId });
        const book = await bookModel.findById({ _id: id });
        const bookPrice = parseInt(book.price);
        const qty = parseInt(quantity);
        const bookIndex = cart.books.findIndex(bookItem => bookItem.bookId.toString() === id.toString());

        if (bookIndex == -1) {
            return res.status(400).json({
                message: "Book not found Please it to the cart"
            })
        }
        else {

            // console.log(qty);
            cart.totalItems = 0;
            cart.totalPrice = 0;
            let tItem = 0;
            let tPrice = 0;
            cart.books[bookIndex].quantity = qty;
            cart.books[bookIndex].totalPrice = cart.books[bookIndex].price * cart.books[bookIndex].quantity;

            cart.books.forEach(element => {
                // console.log(element.quantity);
                tItem += element.quantity;
                tPrice += element.totalPrice;
            })
            cart.totalItems = tItem;
            cart.totalPrice = tPrice;

            const savedCart = await cart.save();
            res.status(200).json({
                message: "Successfully updated book quantity",
                savedCart
            });
        }

    } catch (error) {
        console.log("Something Went Worng  while updating cart qunatity", error);
        res.status(500).json({
            message: `Error updating Carts ${error.message}`
        })
    }
}
const removeCartItem = async (req, res) => {
    const { id } = req.params;
    const { cartId } = req.body;
    try {
        let tItem = 0;
        let tPrice = 0;
        const cart = await CartModel.findById({ _id: cartId });
        if (!cart) {
            return res.status(400).json({
                message: "Cart not Found"
            })
        }

        const bookRemoved = await CartModel.updateOne({ _id: cartId }, { $pull: { books: { bookId: id } } });

        if (!bookRemoved) {
            return res.status(400).json({
                message: "Book not removed"
            })
        }

        cart.books.forEach(element => {
            // console.log(element.quantity);
            tItem += element.quantity;
            tPrice += element.totalPrice;
        })
        cart.totalItems = tItem;
        cart.totalPrice = tPrice;

        const updatedCart = await cart.save();

        res.status(200).json({
            message: "Book  removed",
            bookRemoved,
            updatedCart
        })


    } catch (error) {
        console.log("Something Went Worng  while deleting book from cart ", error);
        res.status(500).json({
            message: `Error deleting book from cart ${error.message}`
        })
    }
}

const getCartDetails = async (req,res)=>{
    const{ id } = req.params;
    try {
        
        const cart = await CartModel.findById({_id:id})
        if(!cart){
            return res.status(400).json({
                message: "Cart not Found"
            });
        }
        res.status(200).json({
            message: "cart found",
            cart
        })

    } catch (error) {
        console.log("Something Went Worng  while getting cart by id ", error);
        res.status(500).json({
            message: `Error getting cart by id ${error.message}`
        })
    }
}
module.exports = { createCart, addToCart, getAllCarts, updateCartItem, removeCartItem,getCartDetails };