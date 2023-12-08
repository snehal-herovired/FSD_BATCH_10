const express = require('express');
const cartRouter = express.Router();
const {createCart,addToCart,getAllCarts,updateCartItem,removeCartItem,getCartDetails} = require('../controllers/cart.controller');
const jwtVerify = require('../middleware/jwt.middleware');
// Create a new cart
cartRouter.post('/create',jwtVerify, createCart);

// Get all carts
cartRouter.get('/all',jwtVerify, getAllCarts);

// Add an item to the cart
cartRouter.post('/addToCart',jwtVerify, addToCart);

// Update an item in the cart
cartRouter.put('/update-item/:id',jwtVerify, updateCartItem);

// Remove an item from the cart
cartRouter.delete('/remove-item/:id',jwtVerify, removeCartItem);

// Get cart details by ID
cartRouter.get('/details/:id',jwtVerify, getCartDetails);

module.exports = cartRouter;
