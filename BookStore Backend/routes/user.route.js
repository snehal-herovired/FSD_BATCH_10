const express = require('express');
const UserRouter =  express.Router();

const jwtVerify = require('../middleware/jwt.middleware')

const {register,login,profileView,updateUsername}= require('../controllers/user.controller');


// Register a new user
UserRouter.post('/register',register);

// Login an existing user
UserRouter.post('/login',login);

// View user profile by ID (requires JWT authentication)
UserRouter.get('/userProfile/:id',jwtVerify,profileView);
// Update user's username by ID (requires JWT authentication)
UserRouter.put('/changeUsername/:id',jwtVerify,updateUsername);

module.exports = UserRouter;
