var parseString = require('xml2js').parseString;
var http = require('http');
var fs = require('fs');

function getXml(url) {

    http.get(url, function(html) {

        var cont = '';
        html.on('data', function(content) {
            cont += content.toString('utf-8');
        })

        html.on('end', function() {

            // write to /datas/rss.xml
            saveXml(cont);

            // parse xml to object to string
            parse(cont);
        })
    })
}

function parse(cont) {

    parseString(cont, { trim: true }, function(err, result) {
        if (err) throw err;
        xml_dom = result;
    })

    // console.log(xml_dom.rss.channel[0].item[0].title.toString());
    // console.log(xml_dom.rss.channel[0].item[0].description.toString());
    // console.log(xml_dom.rss.channel[0].item[0].author.toString());
    // console.log(xml_dom.rss.channel[0].item[0].pubDate.toString());
    // console.log(xml_dom.rss.channel[0].item[0].link.toString());
    // console.log(xml_dom.rss.channel[0].item[0].guid.toString());
    var datas = xml_dom.rss.channel[0].item;
    var html = '';

    datas.forEach(function(ele){
    	console.log(ele.title.toString());

    	var title = ele.title.toString();
    	var description = ele.description.toString();
    	var author = ele.author.toString();
    	var pubDate = ele.pubDate.toString();
    	var link = ele.link.toString();
    	var guid = ele.link.toString();

    	var xml_string;
    })
}

function saveXml(cont) {
    fs.writeFile('datas/rss.xml', cont, function(err) {
        if (err) throw err;
        console.log('saved!');
    })
}

var rssModels = {

    index: function(req, res, next) {
        res.render('rss', {
            title: 'RSS'
        });
    },
    jqRss: function(req, res, next) {

        var rss = getXml('http://www.dgtle.com/rss/dgtle.xml');

        res.render('rssxml', {
            title: 'RSS',
            xml: "rss[0].title.toString();"
        });
    }
}

module.exports = rssModels;
