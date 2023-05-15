const express = require("express");
const router = express.Router();
const mainController = require("../controller/mainController");

/* set application routes */
router.get('/', mainController.homePage);
router.get('/about', mainController.aboutPage);
// router.get('/404', mainController.quatre);

// router.get('/dashboard', mainController.dashboard);

module.exports = router;