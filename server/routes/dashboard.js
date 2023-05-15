const express = require("express");
const router = express.Router();
const dashController = require("../controller/dashController");

/* dashboard routes */

router.get('/dashboard',dashController.dashboard);

module.exports = router;