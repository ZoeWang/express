<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
	<link rel="stylesheet" type="text/css" href="stylesheets/bootstrap.min.css">
	<title>{{title}}</title>
	<style type="text/css">
		section{
			padding:0 20px;
		}
		article{
			margin-bottom: 30px;
			border-top:1px solid #ccc;
		}
		.title{
			font-size: 20px;
			font-weight: 500;
			margin-top:20px;
			text-align: center;
		}
		.author{
			margin:15px 0;
			text-align: center;
		}
		.pubdate{
			margin-top:10px;
		}
		.link{
			margin-top:5px;
		}
		.pubdate,.link{
			text-align: center;
		}
		img{
			width: 100%;
		}
	</style>
</head>
<body>
	{%block content%}
	{%endblock%}

</body>
</html>