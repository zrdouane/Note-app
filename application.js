/* set dependencies */
const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const expressLayouts = require("express-ejs-layouts");
app.use(express.urlencoded({extended : true}));
app.use(express.json());

/* set static files */
app.use(express.static("public"));

/* set ejs */
app.use(expressLayouts);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');


/* set port for default as 3000 */
const port = 3000;

/* set routes */
app.use('/', require("./server/routes/index"));

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