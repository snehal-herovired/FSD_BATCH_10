const passport = require('passport');
const GoogleStrategy =require('passport-google-oauth20').Strategy;
require('dotenv').config()

// Step 1 : install passport and google oauth20 from passportjs
//Step 2: define google strategy and use it as passportjs middleware
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    // User.findOrCreate({ googleId: profile.id }, function (err, user) {
    //   return cb(err, user);
    // });
    console.log(profile);
  }
));

// Step 4 : defining the google authentication route and load the passport authentication
//           with google.
app.get('/google',
  passport.authenticate('google', { scope: ['profile','email'] }));


  //Step 5 : callback url or api endpoint is defined : it gives us the info of user status,
        //  and what to do when authentication succeeds .
app.get('/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });