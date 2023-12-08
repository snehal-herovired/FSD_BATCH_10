const express = require('express');
const ReviewRouter =  express.Router();

const jwtVerify = require('../middleware/jwt.middleware')

const {submitReview}= require('../controllers/review.controller');

ReviewRouter.post('/submit',submitReview);




module.exports = ReviewRouter;
