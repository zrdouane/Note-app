exports.dashboard = async (req, res) => {
    const locals = {
        title : "Dashboard - Note app",
        description : "Note app with Nodejs"
    }
    // res.render('dashboard/index', {
    //     locals,
    //     layout: '../views/layouts/dashboard'
    // });
    res.send("hey its dash");
}