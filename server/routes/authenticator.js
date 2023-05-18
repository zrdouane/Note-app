const express = require("express");
const router = express.Router();
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require("../models/user");

passport.use(
	new GoogleStrategy({
	clientID: process.env.clientID,
	clientSecret: process.env.clientSecret,
	callbackURL: process.env.callbackURL
},
	async function (accessToken, refreshToken, profile, done) {
		const newUser = {
			googleId: profile.id,
			displayName: profile.displayName,
			firstName: profile.name.givenName,
			lastName: profile.name.familyName,
			profileImage: profile.photos[0].value,
	};
		try {
			let user = await User.findOne({ googleId: profile.id });
			if (user) {
				done(null, user);
			} else {
				user = await User.create(newUser);
				done(null, user);
			}
		} catch (error) {
			console.log(error);
		}
	}
));

/* google login routes */
router.get(  "/auth/google",
passport.authenticate("google", { scope: ["email", "profile"] })
);

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

/* Presise data user after succes auth */
passport.serializeUser(function (user, done) {
	done(null, user.id);
});

/* retrieve user data from session */
passport.deserializeUser(async function (id, done) {
	try {
	  const user = await User.findById(id).exec();
	  done(null, user);
	} catch (err) {
	  done(err, null);
	}
});
  

module.exports = router;