var rssModels = {
    index: function(req, res, next) {
        res.render('rss', {
            title: 'RSS'
        });
    }
}

module.exports = rssModels;
