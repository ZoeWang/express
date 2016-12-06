var express = require('express');
var router = express.Router();

var indexModels = require('../models/index.js');
var rssModels = require('../models/rssModels.js');
var loginModels = require('../models/loginModels.js');
var wxModels = require('../models/wxModels.js');

/* GET home page. */

router.get('/',indexModels.index);
router.get('/rss',rssModels.index);
router.get('/dgtle',rssModels.jqRss);
router.get('/getdata',rssModels.getdata);
router.get('/login',loginModels.index);
router.get('/test',wxModels.index);
router.post('/test',wxModels.index);

module.exports = router;
