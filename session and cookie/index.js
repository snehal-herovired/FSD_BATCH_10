const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const path =require('path');
require('dotenv').config();
const passport =require('passport')
const app = express();

app.use(express.json());

const viewDirectory =path.join(__dirname,"views");
app.use(express.static(viewDirectory));
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


app.use(passport.initialize());
app.use(passport.session());

function ensureAuthenticated(req,res,next){
    if(req.isAuthenticated()){
       return next()
    }
    res.redirect('/login.html')
}

app.get('/mainPage',ensureAuthenticated,(req,res)=>{
    res.json({message:`Hi ${req.user.displayName}`})
})
const GoogleRoutes =require('./passportGoogle');
app.use('/auth',GoogleRoutes);

app.listen(3000, () => {
    console.log("server running on Port 3000");
})
