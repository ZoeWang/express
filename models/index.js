var indexModels = {
    index: function(req, res, next) {
        res.render('index', {
            pagename: 'awesome people',
            authors: ['Paul', 'Jim', 'Jane']
        });
    }
}

module.exports = indexModels;
