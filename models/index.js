var indexModels = {
    index: function(req, res, next) {
        res.render('index', {
            pagename: 'Fruits',
            authors: ['Apple', 'Palm', 'Blackberry']
        });
    }
}

module.exports = indexModels;
