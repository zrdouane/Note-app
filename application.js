/* set dependencies */
const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
// const session = require("express-session");
const passport = require("passport");
const mongooStore = require("connect-mongo");
const connectDB = require("./server/database/db");
// const connectDB = require("./server/database/db");

const expressLayouts = require("express-ejs-layouts");
app.use(express.urlencoded({extended : true}));
app.use(express.json());

/* initialze passport and use passport session */
app.use(passport.initialize());
// app.use(passport.session());


//connect to tatabase
connectDB();

/* set static files */
app.use(express.static("public"));

/* set ejs */
app.use(expressLayouts);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');


/* set port for default as 3000 */
const port = 3000;

/* set routes */
app.use('/', require("./server/routes/authenticator"));
app.use('/', require("./server/routes/index"));
app.use('/', require("./server/routes/dashboard"));


// app.use('/', (req, res) => {
// 	const locals = {
// 		title : "Note app",
// 		description : "Note app with Nodejs"
// 	}
// 	res.render('index', locals);
// });

app.listen(port , () => {
	console.log("the server is run in port", port);
});