const express = require('express');
const MongoStore = require('connect-mongo')
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const session = require('express-session');
const cors = require('cors')
require('./passport');
const app = express();
app.use(cors({
    origin: 'http://127.0.0.1:5500',
    credentials: true,
    methods: "GET POST PUT DELETE"
}));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({
    secret: 'your-secret-key',
    store: MongoStore.create({
        mongoUrl: "mongodb://localhost:27017/passportSession"
    }),
    resave: false, saveUninitialized: false,
    cookie: {
        httpOnly: true

    }
}));
app.use(passport.initialize());
app.use(passport.session());



// Routes
app.get('/login/failure', (req, res) => {
    req.statusCode(404).json({
        login: false,
        authenticated: false
    })
})

app.get('/login/success', (req, res) => {
    req.user ?
        res.status(200).json({
            login: true,
            authenticated: true,
            user: req.user
        }) :
        res.status(404).json({
            login: false,
            authenticated: false,
            message: "something went wrong"
        })
})
function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next(); // User is authenticated, proceed to the next middleware
    }
    res.redirect('/error'); // Redirect to the home page if not authenticated
}

app.get('/error',(req,res)=>{
    res.send("ERROR PAGE...not authorized")
})
// Protected route
app.get('/dashboard', ensureAuthenticated, (req, res) => {
    res.send(`Dashboard | Welcome, ${req.user.username}!`);
});
app.get('/auth/logout', (req, res, next) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        }
        res.redirect('http://127.0.0.1:5500');
    });
})

app.get('/auth/google',
    passport.authenticate('google', { scope: ['profile ', 'email'] }));

app.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/login/failure' }),
    function (req, res) {
        // Successful authentication, redirect home.
        res.redirect('/login/success')

    });

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
