// Learning session and cookies :
const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo')
require('dotenv').config();
const app = express();

app.use(express.json());

app.use(session({
    //
    secret: process.env.SECRET_KEY,
    //resave ,is saving the session to session store , even if session has been npt been modified
    resave: false,
    saveUninitialized: false,
    cookie: {
        //  secure: true  : only when u are working with https
        httpOnly: true,   // it XSS attacks;
        maxAge: 1000 * 60 * 60 * 24



    },
    store: MongoStore.create({
        mongoUrl: process.env.SESSION_MONGO_URL
    })
}))

function isAuthenticated(req, res, next) {
    // we will check if session has userid;
    // we will pass control to next middleware;
    req.session.userid ? next() : res.send('you are not authenticated')
}


app.get('/info', isAuthenticated, (req, res) => {
    res.send('session class')
})



app.post('/login', (req, res) => {
    //authentication logic

    //the moment user entered password matches the db password
    req.session.userid = '1234'

    res.send('hi you are logged in')
})


app.get('/logout',isAuthenticated,(req,res)=>{
    req.session.destroy();
    res.send('you are logged out')
})



app.listen(5000, () => {
    console.log("server running on Port 5000");
})




