const express = require('express');
const router = express.Router();

var newsController = require('./../app/controllers/NewsController');

router.get('/news/:slug', newsController.show);

router.get('/news', newsController.index);

module.exports = router;
