const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
require('dotenv').config()
// Passport Google OAuth2.0 strategy
passport.use(new GoogleStrategy({
    clientID:process.env.clientID,
    clientSecret: process.env.clientSecret,
    callbackURL: '/auth/google/callback',
  }, (accessToken, refreshToken, profile, done) => {
    // Save or retrieve user profile information from your database
    // Typically, you would associate the user with a database record
    // and call the 'done' callback with the user object.
    console.log(profile);
    const userProfile = {
        email:profile.emails[0].value,
        username:profile.displayName,
        img:profile.photos[0].value
    }
    return done(null, userProfile);
  }));
  
  // Serialize user to store in the session

  passport.serializeUser((user, done) => {
    // here in serializeuser you can use user.id to create a session object
     done(null, user);
  });
  
  // Deserialize user from the session
  passport.deserializeUser((user, done) => {
    // In a production app, you would retrieve user data from the database
    done(null, user);
  });

  module.exports;