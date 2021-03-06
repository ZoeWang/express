"use strict";
var http = require('http');
var fs = require('fs');

var cheerio = require('cheerio');

// cheerio option
// {
//     withDomLvl1: true,
//     normalizeWhitespace: false,
//     xmlMode: false,
//     decodeEntities: true
// }

// 获取站点 html
function getHtml(url, site) {
    http.get(site, function(html) {

        var cont = '';
        html.on('data', function(content) {
            cont += content.toString('utf-8');
        })

        html.on('end', function() {
            saveHtml(url, cont); // save to datas/site.html
            fs.readFile('datas/site.html', 'utf-8', function(err, data) {
                if (err) throw err;
                parse(data);
            })
        })
    })
}

// 保存站点 html
function saveHtml(url, cont) {
    fs.writeFile(url, cont, function(err) {
        if (err) throw err;
        console.log('抓取并保存成功');
    })
}

function parse(data) {
    var $ = cheerio.load(data);
    var html = [];

    $('dt a').each(function(i, elem) {
        html[i] = $(this).attr('href');
    })

    console.log('获取目标站点链接成功');

    reptile.datas.articles = html;

    console.log('开始抓取目标链接内容');
    fetchPage(reptile.datas.i, reptile.datas.k);

}

function fetchPage(i, k) {

    http.get(reptile.datas.articles[reptile.datas.k], function(html) {
        var url = `datas/articles/articles${reptile.datas.k + 1}.html`
        var cont = '';
        html.on('data', function(content) {
            cont += content.toString('utf-8');
        })

        html.on('end', function() {
            saveHtml(url, cont); // save to datas/site.html
        })

        reptile.datas.k++;

        if (k < i - 1) {
            fetchPage(reptile.datas.i, reptile.datas.k)
            console.log(k);
            console.log(i);
        } else {
            reptile.datas.k = 0;
        }
    })
}

function parseArticle(data) {
    var $ = cheerio.load(data);
    var title = $('.cr_h1title').html();
    var content = $('#view_content').html();
    var article = `<h2>${title}</h2><div class="main">${content}</div>`
    console.log('正在初始化');
    return article;
}

var reptile = {
    datas: {
        i: 10, //保存文章数量
        k: 0,
        articles: [],
        order: 1,
        time: 0
    },
    index: function(req, res, next) {
        res.render('reptile', {
            title: 'reptile'
        });
    },
    articlesInit: function(req, res, next) {
        var now = new Date().getTime();
        var url = `datas/articles/articles${reptile.datas.order}.html`;

        var area = now - reptile.datas.time;

        if (area > 7200000) {
            getHtml('datas/site.html', "http://www.dgtle.com/");
            reptile.datas.time = now;
            console.log('正在获取站点链接');
        }

        fs.readFile(url, 'utf-8', function(err, data) {
            if (err) throw err;
            var html = parseArticle(data);
            res.json({ content: html });
        })
    },
    getArticle: function(req, res, next) {
        var i = req.body.order;
        var url = `datas/articles/articles${req.body.order}.html`;
        fs.readFile(url, 'utf-8', function(err, data) {
            if (err) throw err;
            var html = parseArticle(data);
            res.json({ content: html,number:req.body.order });
        })
    }
}

module.exports = reptile;
