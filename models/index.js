var indexModels = {
    index: function(req, res, next) {
        res.render('index', {
            pagename: 'Fruit',
            authors: ['apple', 'palm', 'blackberry']
        });
    }
}

module.exports = indexModels;
