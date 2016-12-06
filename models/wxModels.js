var wxModels = {
	index:function(req,res,next){
		res.render('test',{
			title:'wxTest',
			respond:'success'
		});
	}
}

module.exports = wxModels;