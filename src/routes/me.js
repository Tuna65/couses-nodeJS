const express = require('express');
const router = express.Router();

var MeController = require('../app/controllers/MeController');

router.get('/me/recyclebin/courses', MeController.showRecycleBin);

router.get('/me/stored/courses', MeController.showMyCourse);

router.patch('/me/:_id/restore', MeController.restore);

module.exports = router;
