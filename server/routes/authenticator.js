const express = require("express");
const router = express.Router();
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

passport.use(new GoogleStrategy({
    clientID: process.env.clientID,
    clientSecret: process.env.clientSecret,
    callbackURL: process.env.callbackURL
  },
function(accessToken, refreshToken, profile, cb) {
    console.log(profile);
}
));
/* google login routes */

router.get('/auth/google',
    passport.authenticate('google', { scope: ['profile'] }
));

/* receiving user data */
router.get('/google/callback', 
  passport.authenticate('google', {
    failureRedirect: '/login-failure',
    succesRedirect: '/dashboard' 
    })
);

/* midleware for login-failure when receiving user data */
router.get('/login-failure', (req, res) => {
    res.send('something went wrong...');
});

module.exports = router;