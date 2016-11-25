var parseString = require('xml2js').parseString;
var http = require('http');
var fs = require('fs');

function getXml(url,ress,tmplete) {

    http.get(url, function(html) {

        var cont = '';
        html.on('data', function(content) {
            cont += content.toString('utf-8');
        })

        html.on('end', function() {

            // write to /datas/rss.xml
            saveXml(cont);

            // parse xml to object to string
            var html = parse(cont);
            // return html
            // console.log(html)
            ress.render(tmplete, {
                title: 'RSS',
                xml: html
            });
            
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

    return datas;

    var html = '';

    datas.forEach(function(ele){
    	// console.log(ele.title.toString());

    	var title = ele.title.toString();
    	var description = ele.description.toString();
    	var author = ele.author.toString();
    	var pubDate = ele.pubDate.toString();
    	var link = ele.link.toString();
    	var guid = ele.link.toString();

    	var xml_string = `<p>${title}</p>`

        html += xml_string;
    })
    // console.log(html)
    return html
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

        // var rss = getXml('http://www.dgtle.com/rss/dgtle.xml',res,'rssxml');
        // console.log(rss)

        http.get('http://www.dgtle.com/rss/dgtle.xml', function(html) {

            var cont = '';
            html.on('data', function(content) {
                cont += content.toString('utf-8');
            })

            html.on('end', function() {

                // write to /datas/rss.xml
                // saveXml(cont);

                // parse xml to object to string
                var html = parse(cont);

                res.render('rssxml', {
                    title: 'RSS',
                    xml: html
                });
                
            })
        })  
    },
    getdata:function(req,res,next){
        http.get('http://www.dgtle.com/rss/dgtle.xml', function(html) {

            var cont = '';
            html.on('data', function(content) {
                cont += content.toString('utf-8');
            })

            html.on('end', function() {

                // parse xml to object to string
                var html = parse(cont);
                
                // console.log(html)

                res.json( {
                    code: '200',
                    xml: html
                });
                
            })
        })
    }
}

module.exports = rssModels;
