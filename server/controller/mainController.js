/* get homePage */
exports.homePage = async (req, res) => {
	const locals = {
		title : "Note app",
		description : "Note app with Nodejs"
	}
    res.render('index', locals);
};

exports.aboutPage = async (req, res) => {
	const locals = {
		title : "About - Note app",
		description : "Note app with Nodejs"
	}
    res.render('about', locals);
};

exports.quatre = async (req, res) => {
	const locals = {
		title : "404 - Note app",
		description : "404"
	}
    res.render('404', locals);
};

// exports.dashboard = async (req, res) => {
// 	const locals = {
// 		title : "dashboard - Note app",
// 		description : "Note app with Nodejs"
// 	}
//     res.render('dashboard', locals);
// };