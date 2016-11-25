var express = require('express');
var router = express.Router();

var indexModels = require('../models/index.js');
var rssModels = require('../models/rssModels.js');

/* GET home page. */

router.get('/',indexModels.index);
router.get('/rss',rssModels.index);
router.get('/rssxml',rssModels.jqRss);
router.get('/getdata',rssModels.getdata);


module.exports = router;
