const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
require('dotenv').config()
const GoogleRoutes = require('express').Router();

// Step 1 : install passport and google oauth20 from passportjs
//Step 2: define google strategy and use it as passportjs middleware
passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: "/auth/google/callback"
},
  function (accessToken, refreshToken, profile, done) {

    console.log(profile);
    //profle : according to fields of profile we can create schema  
    //
    //userschema :{
    // profilename
    // email
    // googleid :profile.id
    // }

    //we will check with this profile id , that if user exists or not
    // if user is new ; create the user document;
    // if user is existing  : UserModel.findOne({googleid:profile.id});
    done(null, profile);
  }
));

// Step 4 : defining the google authentication route and load the passport authentication
//           with google.
GoogleRoutes.get('/google',
  passport.authenticate('google', { scope: ['profile', 'email'] }));


//Step 5 : callback url or api endpoint is defined : it gives us the info of user status,
//  and what to do when authentication succeeds .
GoogleRoutes.get('/google/callback',
  passport.authenticate('google', { failureRedirect: '/login.html' }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect('/dashboard.html');
  });


GoogleRoutes.get('/logout', (req, res, next) => {
  req.logout((err) => {
    if (err) {
      console.log(err);
      return next(err);
    }
    res.redirect('/')
  })
})

passport.serializeUser((user, done) => {
  // serialize is used from determining which data of the user should be store in the session
  //  user.id =profile.id

  done(null, user.id)


})


passport.deserializeUser((user, done) => {
  done(null, user)
})



module.exports = GoogleRoutes;

