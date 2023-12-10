const express =require('express');
const {RegisterUser,LoginUser} =require('../controllers/user.controllers')

// creating cusotm route;
const UserRoute =express.Router();

UserRoute.post('/register',RegisterUser);
UserRoute.post('/login',LoginUser);



// {
//     "counter":3
// }
module.exports =UserRoute;