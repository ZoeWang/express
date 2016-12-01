var parseString = require('xml2js').parseString;
var http = require('http');
var fs = require('fs');

// 编译 xml
function parse(cont) {

    parseString(cont, { trim: true }, function(err, result) {
            if (err) throw err;
            xml_dom = result;
        })

    // rss.dgtle.com 的 xml 结构
    // console.log(xml_dom.rss.channel[0].item[0].title.toString());
    // console.log(xml_dom.rss.channel[0].item[0].description.toString());
    // console.log(xml_dom.rss.channel[0].item[0].author.toString());
    // console.log(xml_dom.rss.channel[0].item[0].pubDate.toString());
    // console.log(xml_dom.rss.channel[0].item[0].link.toString());
    // console.log(xml_dom.rss.channel[0].item[0].guid.toString());

    var datas = xml_dom.rss.channel[0].item;

    var total = [];

    for (var i = 0; i < 12; i++) {
        total.push(datas[i])
    }

    return total;

    // 以下部分现交由模版编写
    // var rss_title = '';
    // datas.forEach(function(ele) {
    //     var title = ele.title.toString();
    //     var description = ele.description.toString();
    //     var author = ele.author.toString();
    //     var pubDate = ele.pubDate.toString();
    //     var link = ele.link.toString();
    //     var guid = ele.link.toString();
    //     var xml_title = `<p>${title}</p>`
    //     rss_title += xml_title;
    // })

}

// 获取 xml
function getXml(url) {

    http.get(url, function(html) {

        var cont = '';
        html.on('data', function(content) {
            cont += content.toString('utf-8');
        })

        html.on('end', function() {
            saveXml(cont); // save to datas/rss.xml
        })
    })
}
// 保存 xml
function saveXml(cont) {
    fs.writeFile('datas/rss.xml', cont, function(err) {
        if (err) throw err;
        console.log('saved!');
    })
}

function saveConfig(cont) {
    fs.writeFile('config/config.txt', JSON.stringify(cont), function(err) {
        if (err) throw err;
        console.log('config.txt saved!');
    })
}

function readConfig(url) {
    var now = new Date().getTime();
    var time = { 'time': now };

    fs.readFile(url, 'utf-8', function(err, data) {
        if (err) throw err;
        var datas = JSON.parse(data);
        rssModels.data.time = datas.time;
        var area = now - rssModels.data.time;
        if (area > 7200000) {
            saveConfig(time);
            getXml('http://www.dgtle.com/rss/dgtle.xml');
        }
    })
}

var rssModels = {
    data: {
        time: 0
    },

    index: function(req, res, next) {
        res.render('rss', {
            title: 'RSS'
        });
    },
    jqRss: function(req, res, next) {

        var now = new Date().getTime();
        var time = { 'time': now };

        readConfig('config/config.txt');

        fs.readFile('datas/rss.xml', 'utf-8', function(err, data) {
            if (err) throw err;

            var html = parse(data);

            res.render('rssxml', {
                title: 'dgtle',
                xml: html
            });
        })

    },
    getdata: function(req, res, next) {
        http.get('http://www.dgtle.com/rss/dgtle.xml', function(html) {

            var cont = '';
            html.on('data', function(content) {
                cont += content.toString('utf-8');
            })

            html.on('end', function() {

                // parse xml to object to string
                var html = parse(cont);

                // console.log(html)

                res.json({
                    code: '200',
                    xml: html
                });

            })
        })
    }
}

module.exports = rssModels;
