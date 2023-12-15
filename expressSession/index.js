const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const path =require('path')
const MongoStore =require('connect-mongo')
const cors =require('cors')
const app = express();
const directory = path.join(__dirname,'public')
app.use(express.static(directory))
const jwt =require('jsonwebtoken')
app.use(express.json())
const corsOptions = {
  // Replace with the actual origin of your client application
  credentials: true, // Allow credentials (cookies, etc.)
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
};
app.use(cors(corsOptions))
// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/sessionExample', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});



// Configure express-session
app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: false,
  cookie: {
     // Session duration in milliseconds (1 day in this example)
  //  sameSite:'None',
     httpOnly: true, // Ensures that cookies are only accessible through HTTP(S) requests, not JavaScript
  },
  store: MongoStore.create({
    mongoUrl:'mongodb://localhost:27017/sessionExample'
  })
}));

// Middleware to check if the user is logged in
const isLoggedIn = (req, res, next) => {

    console.log(req.session,"from session 1");
    // console.log(req.session.userToken,"from session");
   
  if (req.session.userId ) {
    return next();
  }
  res.status(401).json({ message: 'Unauthorized' });
};

// Login endpoint
// app.post('/login', (req, res) => {
// //   const { username, password } = req.body;
//   const token = jwt.sign({id:1},'sample123',{expiresIn:'1h'});
//   // Validate username and password (you should replace this with your authentication logic)

//   // For simplicity, let's assume the user is authenticated
//   // and we'll store the user ID in the session
//   req.session.userToken =token ;

//   res.json({ message: 'Login successful' });
// });
app.post('/login', (req, res) => {
    const { username, password, rememberMe } = req.body;
  
    // Authenticate the user (replace this with your actual authentication logic)
  
    // For simplicity, let's assume the user is authenticated
    req.session.userId = 'user123';
  
    // Set a longer session expiration if "Remember Me" is checked
    if (rememberMe) {
      req.session.cookie.maxAge = 30 * 24 * 60 * 60 * 1000; // 30 days
    }
  
    res.json({ message: 'Login successful' });
  });
  

// Logout endpoint
app.post('/logout' , (req, res) => {
  // Destroy the session to log the user out
  console.log(req.session,"session to be deleted");
  req.session.destroy((err) => {
    if (err) {
      res.status(500).json({ message: 'Error logging out' });
      return;
    }
    res.json({ message: 'Logout successful' });
  });
});

// Example protected route (requires login)
app.get('/protected', isLoggedIn, (req, res) => {
  res.json({ message: 'You have access to this protected route!' ,data:['a',1,2]});
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
