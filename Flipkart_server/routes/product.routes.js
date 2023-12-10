const addproduct =require('../controllers/product.controllers') 
const express =require('express');
const jwtHandler =require('../utils/jwthandler')
const ProductRoute =express.Router();


ProductRoute.post('/new',jwtHandler,addproduct);

module.exports=ProductRoute;


