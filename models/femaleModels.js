var femaleModels = {
	index:function(req,res,next){
		res.render('female_index',{
			title:'female'
		});
	}
}

module.exports = femaleModels;