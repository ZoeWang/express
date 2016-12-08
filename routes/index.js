var express = require('express');
var router = express.Router();

var indexModels = require('../models/index.js');
var rssModels = require('../models/rssModels.js');
var loginModels = require('../models/loginModels.js');
var reptileModels = require('../models/reptileModels.js');

/* GET home page. */

router.get('/',indexModels.index);
router.get('/rss',rssModels.index);
router.get('/dgtle',rssModels.jqRss);
router.get('/getdata',rssModels.getdata);
router.get('/login',loginModels.index);

router.get('/reptile',reptileModels.index);
router.post('/renew',reptileModels.renew,reptileModels.fetchPage);
router.post('/init',reptileModels.articlesInit);
router.post('/get',reptileModels.getArticle);

module.exports = router;
