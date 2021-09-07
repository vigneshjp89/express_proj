var express = require('express');
var router = express.Router();
var authController= require('../controller/authController');
/* GET users listing. */
router.get('/list', authController.getAllOauthApps);
module.exports = router;