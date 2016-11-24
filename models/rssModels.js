var parseString = require('xml2js').parseString;
var http = require('http');
var fs = require('fs');

function getXml(){
	http.get('http://www.dgtle.com/rss/dgtle.xml',function(html){

		var cont ='';
		html.on('data',function(content){
			cont += content.toString('utf-8');
		})

		html.on('end',function(){
			fs.writeFile('datas/message.xml',cont,function(err){
				if (err) throw err;
				console.log('saved!');
			})
		})
	})
}

function parseXml(ele){

	var xml_dom = null;
	parseString(ele,{trim:true},function(err,result){
		if (err) {
			console.log(err)
		}
		xml_dom = result;
	})

	return xml_dom;
}

var rssModels = {

    index: function(req, res, next) {
        res.render('rss', {
            title: 'RSS'
        });
    },
    jqRss: function(req, res, next) {

    	getXml();
    	


        res.render('rssxml', {
            title: 'RSS',
            xml:"xml_dom.root"
        });
        

        // xmlreader.read(xml_string, function() {
        //     if (null !== error) {
        //         console.log(errors);
        //         return;
        //     }
        //     xml_dom = response.response.text();
        // });
    }
}

module.exports = rssModels;
