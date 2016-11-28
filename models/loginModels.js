var loginModels = {
	index:function(req,res,next){
		res.render('login',{
			title:'Login'
		});
	}
}

module.exports = loginModels;